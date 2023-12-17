const { validationResult, body } = require('express-validator');

// Middleware for validating the request body for addTabletSchedule
exports.validateAddTabletSchedule = [
    body('medicineName').notEmpty(),
    body('day').isArray().notEmpty(),
    body('time').notEmpty(),
    body('compartment').isInt().notEmpty(),
    body('dose').notEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Middleware for validating the request body for addLiquidSchedule
exports.validateAddLiquidSchedule = [
    body('medicineName').notEmpty(),
    body('totalQty').notEmpty(),
    body('day').isArray().notEmpty(),
    body('time').notEmpty(),
    body('quantityToTake').notEmpty(),
    body('dose').notEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Middleware for validating the request body for addInsulinSchedule
exports.validateAddInsulinSchedule = [
    body('medicineName').notEmpty(),
    body('totalQty').notEmpty(),
    body('day').isArray().notEmpty(),
    body('time').notEmpty(),
    body('quantityToTake').notEmpty(),
    body('dose').notEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

exports.validateRegisterUser = [
    body('name').notEmpty(),
    body('username').isLength({ min: 6 }).notEmpty(),
    body('password').isLength({ min: 6 }).notEmpty(),
    body('city').notEmpty(),
    body('state').notEmpty(),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    }
  ];

