const express = require('express');
const {joiSchema} = require("../../models/contact");
const {validation, controllerWrapper, authenticate} = require("../../middlewares");
const {contacts: ctrl} = require("../../controllers")

const contactValidationMiddleware = validation(joiSchema);

const router = express.Router();

// GET /api/contacts
router.get('/', ctrl.getAll);

// GET /api/contacts/10
router.get('/:id', ctrl.getById);

// POST /api/contacts
router.post('/', controllerWrapper(authenticate), contactValidationMiddleware, controllerWrapper(ctrl.add));

// DELETE /api/contacts/10
router.delete('/:id', controllerWrapper(authenticate), controllerWrapper(ctrl.delById));

// PUT /api/contacts/10
router.put('/:id', controllerWrapper(authenticate), contactValidationMiddleware, controllerWrapper(ctrl.updateById));

router.patch("/:id/favorite", controllerWrapper(authenticate), controllerWrapper(ctrl.updateStatusContact));

module.exports = router;
