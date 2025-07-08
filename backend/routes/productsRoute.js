// routes/products.js
const express = require('express');
const productController = require('../controllers/productsController');

const router = express.Router();


router.get('/', productController.getAllProducts);
router.post('/', productController.createProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
