const express = require('express');
const ProductList = require('../database/db');

const router = express.Router(); // <-- Fix here

// Metodo POST
router.post('/', async (req, res) => {
    const newProduct = {
        id: Date.now(),
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity
    }
    ProductList.push(newProduct);
    res.status(201).json(newProduct); //status code 201 = creato con successo
})

// Metodo GET (add this to fetch all products)
router.get('/', (req, res) => {
    res.json(ProductList);
});

// Metodo DELETE
router.delete('/:id', (req, res) => {
  const productId = Number(req.params.id);
  const index = ProductList.findIndex(p => p.id === productId);

  if (index === -1) {
    return res.status(404).json({ message: 'Prodotto non trovato' });
  }

  ProductList.splice(index, 1);
  res.status(204).end(); // status 204 - eliminato con successo, nessun contenuto
});

module.exports = router;