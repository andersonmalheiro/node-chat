const remove = ({ User }, { config }) => async (req, res, next) => {
  const { _id } = req.params;

  try {
    await User.findByIdAndRemove(_id, (err, response) => {
      console.log(response);
      if (err) {
        next(err);
      } else {
        res.status(204).send();
      }
    });
  } catch (error) {
    // Envia o erro para o handler de erros
    next(error);
  }
};

module.exports = remove;
