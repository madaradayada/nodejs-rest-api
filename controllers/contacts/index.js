const getContacts = require('./getContacts');
const getContact = require('./getContact');
const addContact = require('./addContact');
const updateContact = require('./updateContact');
const removeContact = require('./removeContact');
const updateStatusContact = require('./updateStatusContact')

module.exports = {
    getContacts,
    getContact,
    addContact,
    updateContact,
    removeContact,
    updateStatusContact,
}