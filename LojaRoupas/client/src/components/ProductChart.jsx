// src/components/ProductChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Componente para exibir o gráfico de produtos da loja de roupas
const ProductChart = ({ products }) => {
  // Estrutura de dados para o gráfico
  const data = {
    labels: products.map((product) => `${product.name}`), // Inclui o nome 
    datasets: [
      {
        label: 'Quantidade em Estoque',
        data: products.map((product) => product.quantity), // Quantidade de cada produto
        backgroundColor: 'rgba(255, 105, 180, 0.6)',
      },
    ],
  };

  // Opções do gráfico para personalização
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Posição da legenda
      },
      title: {
        display: true,
        text: 'Estoques de Produtos de Roupas', // Título do gráfico
      },
    },
  };

  return (
    <div>
      <h2>Estoques de Produtos</h2>
      <Bar data={data} options={options} /> {/* Renderiza o gráfico */}
    </div>
  );
};

export default ProductChart;
