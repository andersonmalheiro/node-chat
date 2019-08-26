const remove = ({ User }, { config }) => async (req, res, next) => {
  const { _id } = req.params;

  try {
    await User.findByIdAndRemove(_id, (err, response) => {
      if (err) {
        next(err);
      } else if (response) {
        res.status(204).send();
      } else {
        res.status(400).send({ error: 'User not found.' });
      }
    });
  } catch (error) {
    // Envia o erro para o handler de erros
    next(error);
  }
};

module.exports = remove;
