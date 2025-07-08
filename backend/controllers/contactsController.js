const Contacts = require('../models/contacts');

// GET - /api/contacts
exports.getAllContacts = async (req, res) => {
    try{
        const contacts = await Contacts.find();
        res.status(200).json(contacts);
    }catch(err){
        res.status(500).json({message: 'Errore nella visualizzazione dei contatti', err});
    }
}

// POST - /api/contacts
exports.createContact = async (req, res) => {
    try{
        const { name, email, message } = req.body;
        const newContact = await Contacts.create({name, email, message});
        res.status(201).json(newContact);
    }catch(err){
        res.status(500).json({message: 'Errore nella creazione del contatto', err})
    }
}

// DELETE - /api/contacts
exports.deleteContact = async (req, res) => {
    try{
        const { id } = req.params;
        const contact = await Contacts.findByIdAndDelete(id);
        if(!contact){
            return res.status(404).json({message: 'Contatto non trovato'})
        } 
        res.status(204).end(); // successfully deleted    
    }catch(err){
        res.status(500).json({message: 'Errore nella cancellazione'});
    }
}