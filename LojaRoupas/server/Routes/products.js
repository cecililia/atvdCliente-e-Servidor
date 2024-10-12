const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Criar um novo produto
router.post('/products', async (req, res) => {
    const { name, description, price, quantity } = req.body;
    const product = await Product.create({ name, description, price, quantity });
    res.status(201).json(product);
});

// Listar todos os produtos
router.get('/products', async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
});

// Atualizar um produto
router.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    await Product.update(req.body, { where: { id } });
    res.status(204).send();
});

// Excluir um produto
router.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    await Product.destroy({ where: { id } });
    res.status(204).send();
});

module.exports = router;
