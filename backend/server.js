const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const productList = require('./routes/productsRoute');

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connection to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connesso'))
  .catch(err => console.error('❌ Errore connessione Mongo:', err));


app.use('/api/inventory', productList);

app.listen(3000, () => console.log('✅ Backend su', process.env.LOCALHOST));