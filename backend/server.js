const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const productList = require('./routes/productsRoute');
const contactList = require('./routes/contactsRoute')

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connection to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connesso'))
  .catch(err => console.error('❌ Errore connessione Mongo:', err));


app.use('/api/products', productList);
app.use('/api/contacts', contactList);

process.on('Errore inaspettato', (err) => {
  console.error('errore non gestito', err);
  process.exit();
})

app.listen(3000, () => console.log('✅ Backend su', process.env.LOCALHOST));