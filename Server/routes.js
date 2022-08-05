module.exports = function(app) {
    const mainRoute = require('./routes/main');

    app.use('/', mainRoute);
}