const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const sequelize = require('./models/Index');
const Product = require('./models/Product');


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', productRoutes);

const IniciarServer = async () => {
    await sequelize.sync(); // Sincroniza o banco de dados
    app.listen(3001, () => {
        console.log('Servidor rodando na porta 3001');
    });
};


IniciarServer();
