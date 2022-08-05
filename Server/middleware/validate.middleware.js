module.exports = (validator) => {
    return (err, req, res, next) => {
        validator(req.body);
        next();
    }
}