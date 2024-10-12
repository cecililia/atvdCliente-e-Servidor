// src/components/ProductList.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ProductList.css';

const ProductList = ({ products, fetchProducts, selectProduct }) => {
  const [filterText, setFilterText] = useState('');

  // Função para filtrar produtos
  const getFilteredProducts = () => {
    return products.filter(product =>
      product.name.toLowerCase().includes(filterText.toLowerCase())
    );
  };

  // Função para renderizar um item de produto
  const renderProductItem = (product) => (
    <div key={product.id} className="product-item">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Preço: R$ {product.price.toFixed(2)}</p>
      <p>Quantidade: {product.quantity}</p>
      <div className="button-group">
        <button onClick={() => selectProduct(product)}>Editar</button>
        <button onClick={() => handleDelete(product.id)}>Excluir</button>
      </div>
    </div>
  );

  // Função para excluir um produto
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/products/${id}`);
      fetchProducts(); // Atualiza a lista de produtos após a exclusão
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
    }
  };

  // Filtra e renderiza os produtos
  const filteredProducts = getFilteredProducts();

  return (
    <div className="product-list">
      <input
        type="text"
        placeholder="Filtrar produtos"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      {filteredProducts.length > 0 ? (
        filteredProducts.map(renderProductItem)
      ) : (
        <p>Nenhum produto encontrado.</p>
      )}
    </div>
  );
};

export default ProductList;
