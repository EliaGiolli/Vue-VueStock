// routes/products.js
const express = require('express');
const Product = require('../models/product'); // modello mongoose

const router = express.Router();

// POST /api/products 
router.post('/', async (req, res) => {
  try {
    const { name, price, quantity } = req.body;

    const newProduct = await Product.create({ name, price, quantity });

    res.status(201).json(newProduct);
  } catch (err) {
    console.error('Errore POST:', err);
    res.status(500).json({ message: 'Errore durante la creazione' });
  }
});

// GET /api/products 
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.error('Errore GET:', err);
    res.status(500).json({ message: 'Errore durante il recupero' });
  }
});

// DELETE /api/products/:id 
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Product.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: 'Prodotto non trovato' });
    }

    res.status(204).end(); // Nessun contenuto, successo
  } catch (err) {
    console.error('Errore DELETE:', err);
    res.status(500).json({ message: 'Errore durante l\'eliminazione' });
  }
});

module.exports = router;
