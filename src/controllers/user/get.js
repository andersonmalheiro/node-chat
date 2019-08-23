const get = ({ User }, { config }) => async (req, res, next) => {
  // Obtem o id da rota
  const { _id } = req.params;
  try {
    // Busca o usuario
    const user = await User.findOne({ _id });
    res.status(200).send({ user });
  } catch (error) {
    // Envia o erro para o handler de erros
    next(error);
  }
};

module.exports = { get };
