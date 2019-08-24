const list = ({ User }, { config }) => async (req, res, next) => {
  try {
    // Busca todos os usuários
    const users = await User.find({}).select("-password");
    // Retorna os usuários
    res.status(200).send({ users });
  } catch (error) {
    next(error);
  }
};

module.exports = list;
