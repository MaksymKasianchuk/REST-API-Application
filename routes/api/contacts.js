const express = require('express');
const {joiSchema} = require("../../models/contact");
const {validation} = require("../../middlewares");
const ctrl = require("../../controllers/contacts");

const validationMiddleware = validation(joiSchema);

const router = express.Router();

// GET /api/contacts
router.get('/', ctrl.getAll);

// GET /api/contacts/10
router.get('/:id', ctrl.getById);

// POST /api/contacts
router.post('/', validationMiddleware, ctrl.add);

// DELETE /api/contacts/10
router.delete('/:id', ctrl.delById);

// PUT /api/contacts/10
router.put('/:id', validationMiddleware, ctrl.updateById);

router.patch("/:id/favorite", ctrl.updateStatusContact);

module.exports = router;
