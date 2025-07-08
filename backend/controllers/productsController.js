const Product = require('../models/product');

// GET /api/products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Errore nel recupero prodotti' });
  }
};

// POST /api/products
exports.createProduct = async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const newProduct = await Product.create({ name, price, quantity });
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: 'Errore nella creazione' });
  }
};

// DELETE /api/products/:id
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Product.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Prodotto non trovato' });
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: 'Errore nella cancellazione' });
  }
};
