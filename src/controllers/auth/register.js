// Password hasher
const bcrypt = require('bcrypt');
const saltRounds = 10;

const register = ({ User }, { config }) => async (req, res, next) => {
  // Obtem dados da request
  const payload = req.body;

  // Encripta a senha
  const hash = bcrypt.hashSync(payload.password, saltRounds);
  payload.password = hash;

  // Cria novo usuário
  const user = new User(payload);

  try {
    await user.save((err) => {
      if (err) {
        next(err);
      } else {
        res.status(201).send({ user });
      }
    });
  } catch (error) {
    // Envia o erro para o handler de erros
    next(error);
  }
};

module.exports = register;
