const get = ({ User }, { config }) => async (req, res, next) => {
  // Obtem o id da rota
  const { _id } = req.params;
  try {
    // Busca o usuario
    const user = await User.findById({ _id }).select('-password');
    if (user) {
      res.status(200).send({ user });
    } else {
      res.status(400).send({ error: 'User not found.' });
    }
  } catch (error) {
    // Envia o erro para o handler de erros
    next(error);
  }
};

module.exports = get;
