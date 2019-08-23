const mongoose = require('mongoose');
const { schema } = require('./schema');

/**
 * Middleware que executa sempre que o modelo é salvo
 */
schema.pre('save', () => {
  /**
   * Adicione a lógica aqui
   * Validações, tarefas assíncronas, lógica de negócio, etc
   */
});

// Definição do modelo
const User = mongoose.model('User', schema);
module.exports = { User };