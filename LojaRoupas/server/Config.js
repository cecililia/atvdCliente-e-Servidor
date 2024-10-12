// backend/databaseConfig.js
const { Sequelize } = require('sequelize');

// Configuração do banco de dados SQLite
const Config = {
  dialect: 'sqlite',
  storage: './data/store.sqlite', // Caminho onde o banco de dados será armazenado
};

// Criação de uma instância do Sequelize com a configuração definida
const sequelize = new Sequelize(Config);

// Objeto para armazenar as referências do banco de dados
const db = {
  sequelize,
  Sequelize,
};

// Função para testar a conexão com o banco de dados
const testConnection = async () => {
  try {
    await sequelize.authenticate(); // Testa a conexão
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
};

// Testa a conexão ao inicializar o arquivo
testConnection();

// Exporte o objeto db para uso em outros arquivos
module.exports = db;
