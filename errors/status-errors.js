module.exports = class NotFoundError {
    constructor(message, id) {
        this.message = message;
        this.id = id;
    }
}