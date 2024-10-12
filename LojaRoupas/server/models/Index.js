// backend/database.js
const { Sequelize } = require('sequelize');

// Configuração do banco de dados SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Local onde o banco de dados será armazenado
});

// Testa a conexão com o banco de dados
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
};

// Chama a função para testar a conexão
testConnection();

module.exports = sequelize;