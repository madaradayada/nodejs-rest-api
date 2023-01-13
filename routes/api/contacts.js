const express = require('express');
const router = express.Router();

const {
    getContacts,
    getContact,
    addContact,
    updateContact,
    removeContact,
    updateStatusContact,
  } = require("../../controllers/contacts");
const { schemas } = require('../../models/contact');

const { validateBody, isValidId } = require('../../middlewares');


router.get('/', getContacts)

router.get('/:contactId', isValidId, getContact)

router.post('/', validateBody(schemas.addSchema), addContact)

router.put('/:contactId', isValidId, validateBody(schemas.addSchema), updateContact)

router.patch('/:contactId/favorite', isValidId, validateBody(schemas.schemaUpdateFavorite), updateStatusContact)

router.delete('/:contactId', isValidId, removeContact)

module.exports = router
