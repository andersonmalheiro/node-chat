// Password hasher
const bcrypt = require("bcrypt");
const saltRounds = 10;

const create = ({ User }, { config }) => async (req, res, next) => {
  const payload = req.body;
  const hash = bcrypt.hashSync(payload["password"], saltRounds);
  payload["password"] = hash;
  // Cria novo usuário
  const user = new User(payload);

  try {
    await user.save(err => {
      if (err) {
        next(err);
      } else {
        res.status(201).send();
      }
    });
  } catch (error) {
    // Envia o erro para o handler de erros
    next(error);
  }
};

module.exports = create;
