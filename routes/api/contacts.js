const express = require('express');
const ctrl = require("../../controllers/contacts");

const router = express.Router();

// GET /api/contacts
router.get('/', ctrl.getAll);

// GET /api/contacts/10
router.get('/:id', ctrl.getById);

// POST /api/contacts
router.post('/', ctrl.add);

// DELETE /api/contacts/10
router.delete('/:id', ctrl.delById);

// PUT /api/contacts/10
router.put('/:id', ctrl.updateById);

module.exports = router;
