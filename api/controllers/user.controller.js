exports.getUsers = (req, res, next) => {
    res.status(200).json({
        message: 'Users'
    })
}