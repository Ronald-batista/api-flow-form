const mongoose = require("mongoose");

const answersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  telefone: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  empresa: {
    type: String,
    required: true,
    trim: false,
    lowercase: true,
  },
  quantidade_funcionarios: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  ramo_atuacao: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
});

const answers = mongoose.model("answers", answersSchema);

module.exports = answers;