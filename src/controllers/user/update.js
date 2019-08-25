const update = ({ User }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  const payload = req.body;

  try {
    await User.findByIdAndUpdate(
      _id,
      payload,
      { select: { password: 0 }, new: true },
      (err, response) => {
        if (err) {
          next(err);
        } else {
          res.status(200).send({ response });
        }
      }
    );
  } catch (error) {
    // Envia o erro para o handler de erros
    next(error);
  }
};

module.exports = update;
