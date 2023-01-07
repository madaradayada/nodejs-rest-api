const express = require('express')
const router = express.Router()

const contacts = require('../../models/contacts');

const { addSchema } = require('../../schemas/contacts');
const { HttpError } = require('../../helpers');
const { validateBody } = require('../../middlewares');

router.get('/', async (req, res, next) => {
  try {
    const result = await contacts.listContacts()
    res.json(result)
  } catch (error) {
    next(error)
  }
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contacts.getContacts(contactId);

    if (!result) {
      throw HttpError(404, 'Not found')     
    }
    
    res.json(result)

  } catch (error) {
    next(error)
  }
})

router.post('/', validateBody(addSchema),async (req, res, next) => {
  try {   
      const result = await contacts.addContact(req.body);
      res.status(201).json(result);
  } catch (error) {
      next(error)
 }  
})

router.put('/:contactId', validateBody(addSchema),async (req, res, next) => {
  try {    
    const { contactId } = req.params;
    const result = await contacts.updateContact(contactId, req.body);
    if (!result) {
        throw HttpError(404, 'Not found')
    }

    res.json(result)

  } catch (error) {
      next(error)
  }
})

router.delete('/:contactId', async (req, res, next) => {
  try {
      const { contactId } = req.params;
      const result = await contacts.removeContact(contactId);
      if (!result) {
        throw HttpError(404, 'Not found')
    }

    res.json({message: "contact deleted"})
  } catch (error) {
      next(error)
  }
})

module.exports = router