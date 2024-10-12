// src/components/ProductDetail.jsx
import React from 'react';


const ProductDetail = ({ product }) => {
  const renderProductDetails = () => {
    return (
      <div className="product-detail">
        <h2>{product.name}</h2>
        <p><strong>Descrição:</strong> {product.description}</p>
        <p><strong>Preço:</strong> R$ {product.price.toFixed(2)}</p>
        <p><strong>Quantidade em Estoque:</strong> {product.quantity}</p>
      </div>
    );
  };

  const renderPlaceholder = () => {
    return <div className="placeholder">Escolha um item para visualizar mais informações.</div>;
  };

  return (
    <div className="product-detail-container">
      {product ? renderProductDetails() : renderPlaceholder()}
    </div>
  );
};

export default ProductDetail;
