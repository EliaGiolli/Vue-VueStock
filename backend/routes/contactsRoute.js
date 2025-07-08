const express = require('express');
const contactsController = require('../controllers/contactsController');

const router = express.Router();

router.get('/', contactsController.getAllContacts);
router.post('/', contactsController.createContact);
router.delete('/',contactsController.deleteContact);

module.exports = router;