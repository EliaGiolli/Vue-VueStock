const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const productList = require('./routes/productsRoute');
const contactList = require('./routes/contactsRoute')

dotenv.config();
const app = express();

// Middlewares
app.use(cors({
  origin: 'https://vue-vue-stock.vercel.app'
}));
app.use(express.json());

// Connection to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connesso'))
  .catch(err => console.error('❌ Errore connessione Mongo:', err));


app.use('/api/products', productList);
app.use('/api/contacts', contactList);

process.on('unhandledRejection', (err) => {
  console.error('Promise rejection non gestita:', err);
  process.exit(1);
});

app.listen(3000, () => console.log('✅ Backend su', process.env.LOCALHOST));