// src/App.jsx
import React, { useState, useEffect } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductChart from './components/ProductChart';
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:3001/api/products');
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const selectProduct = (product) => {
    setSelectedProduct(product);
    setEditingProduct(product);
  };

  return (
    <div>
      <ProductForm fetchProducts={fetchProducts} editingProduct={editingProduct} />
      <ProductList products={products} selectProduct={selectProduct} fetchProducts={fetchProducts} />
      <ProductDetail product={selectedProduct} />
      <ProductChart key={products.length} products={products} /> {/* Adicione key aqui */}
    </div>
  );
};

export default App;
