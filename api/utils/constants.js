require('dotenv').config();

exports.APP_PORT = process.env.APP_PORT;
exports.DB_HOST = process.env.DB_HOST,
exports.DB_PORT = process.env.DB_PORT,
exports.DB_USER = process.env.DB_USER,
exports.DB_PASS = process.env.DB_PASS,
exports.DB_NAME = process.env.DB_NAME,
    exports.JWT_SECRET = process.env.JWT_SECRET