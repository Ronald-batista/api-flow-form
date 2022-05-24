const Sequelize = require("sequelize");
const database = require("../database/connection");

const Answers = database.define(
  "answers",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING(150),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(150),
      allowNull: false,
    },
    phone: {
      //(##)#####-####
      type: Sequelize.STRING(25),
      allowNull: false,
    },
    business: {
      type: Sequelize.STRING(150),
      allowNull: false,
    },
    quantity_employeers: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    ramo: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    satisfacao: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    comunicacao_interna: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    gestão_equipe: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    interacao_usuario: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    interacao_novo_usuario: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    organizacao: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    processos: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    demandas: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    gestao_financeira: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    acessibilidade: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    conexao_cliente: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    conversao: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    principais_dores: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Answers;
