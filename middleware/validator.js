const MainModel = require("../models/main-model");
const ValidationError = require("../errors/validation-error");

let validators = {};
validators["SCHEMA"] = MainModel.ValidationSchema;

function scopeExists(validator, scope) {
    return Object.keys(validator.scopes).find(key => key == scope) != undefined;
}

function getSchema(model, scope) {
    let validator = validators[model];
    if (!validator) {
        throw new Error("Validator does not exist");
    }

    if (validator.scopes) {
        if (scope) {
            if (!scopeExists(validator, scope)) {
                throw new Error(`Scope ${scope} does not exist in ${model} validator`);
            }
            else {
                return validator.scopes[scope];
            }
        }
        else {
            return validator.scopes.default;
        }
    }
    else {
        return validator;
    }
}

function validate(model, object, scope) {
    const schema = getSchema(model, scope)
    return schema.validate(object)
}

module.exports = function ValidationMiddleware(model, scope) {
    return (req, _res, next) => {
        const validationResult = validate(model, req.body, scope);
        if (validationResult.error) {
            const message = validationResult.error.message.replace(/"/g, '').replace(/_/g, ' ');
            throw new ValidationError(message, model);
        }
        else {
            next();
        }
    };
}