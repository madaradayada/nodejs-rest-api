const express = require("express");
const router = express.Router();

const {
  getContacts,
  getContact,
  addContact,
  updateContact,
  removeContact,
  updateStatusContact,
} = require("../../controllers/contacts");
const { schemas } = require("../../models/contact");

const { validateBody, isValidId, authenticate } = require("../../middlewares");

router.get("/", authenticate, getContacts);

router.get("/:contactId", authenticate, isValidId, getContact);

router.post("/", authenticate, validateBody(schemas.addSchema), addContact);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.schemaUpdateFavorite),
  updateStatusContact
);

router.delete("/:contactId", authenticate, isValidId, removeContact);

module.exports = router;
