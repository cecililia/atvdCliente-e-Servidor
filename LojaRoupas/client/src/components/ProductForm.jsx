// components/ProductForm.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ProductForm.css'; // Importando o CSS

const InputField = ({ label, value, onChange, type = "text", required = false }) => (
  <div className="input-field">
    <label>{label}</label>
    <input
      value={value}
      onChange={onChange}
      type={type}
      required={required}
      placeholder={label}
    />
  </div>
);

const FormesProduct = ({ fetchProducts, editingProduct }) => {
  // Estados para os campos do formulário
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    category: '',
  });

  useEffect(() => {
    if (editingProduct) {
      setFormData({
        name: editingProduct.name,
        description: editingProduct.description,
        price: editingProduct.price,
        quantity: editingProduct.quantity,
        category: editingProduct.category,
      });
    } else {
      setFormData({
        name: '',
        description: '',
        price: '',
        quantity: '',
        category: '',
      });
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editingProduct 
      ? `http://localhost:3001/api/products/${editingProduct.id}` 
      : 'http://localhost:3001/api/products';
    
    const method = editingProduct ? axios.put : axios.post;

    await method(url, formData);
    fetchProducts();
    setFormData({
      name: '',
      description: '',
      price: '',
      quantity: '',
      category: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <InputField label="Nome do Produto" value={formData.name} onChange={handleChange} required />
      <InputField label="Descrição" value={formData.description} onChange={handleChange} />
      <InputField label="Preço" value={formData.price} onChange={handleChange} type="number" required />
      <InputField label="Quantidade" value={formData.quantity} onChange={handleChange} type="number" />
      <InputField label="Tamanho" value={formData.size} onChange={handleChange} required />
      <InputField label="Cor" value={formData.color} onChange={handleChange} required />
      <InputField label="Categoria" value={formData.category} onChange={handleChange} required />
      <button type="submit">Salvar Roupa</button>
    </form>
  );
};

export default FormesProduct;
