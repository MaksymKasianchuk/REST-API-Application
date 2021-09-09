const express = require('express');
const {joiSchema} = require("../../models/contact");
const {validation, controllerWrapper, authenticate} = require("../../middlewares");
const {contacts: ctrl} = require("../../controllers")

const contactValidationMiddleware = validation(joiSchema);

const router = express.Router();

// GET /api/contacts
router.get('/', controllerWrapper(authenticate), ctrl.getAll);

// GET /api/contacts/10
router.get('/:id', controllerWrapper(authenticate), ctrl.getById);

// POST /api/contacts
router.post('/', controllerWrapper(authenticate), contactValidationMiddleware, ctrl.add);

// DELETE /api/contacts/10
router.delete('/:id', controllerWrapper(authenticate), ctrl.delById);

// PUT /api/contacts/10
router.put('/:id', controllerWrapper(authenticate), contactValidationMiddleware, ctrl.updateById);

router.patch("/:id/favorite", controllerWrapper(authenticate), ctrl.updateStatusContact);

module.exports = router;
