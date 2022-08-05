module.exports = (validator, req, res, next) => {
    validator(req.body);
    next();
}