module.exports = {
    apps: [{
        name: "test-microservice",
        script: "./index.js",
        watch: false,
        env: {
            NODE_ENV: "development",
            PORT: 5000,
            LOG_LEVEL: "debug",
            SERVICE_NAME: "Test"
        },
        env_production: {
            NODE_ENV: "production",
            PORT: 5000,
            LOG_LEVEL: "production",
            SERVICE_NAME: "Test"
        }
    }]
}