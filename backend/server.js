const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const productList = require('./routes/products');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/inventory', productList);

app.listen(3000, () => console.log('✅ Backend su http://localhost:3000'));