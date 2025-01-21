const validate = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    next();
  } catch (err) {
    const errorMessage = err.errors[0].message;
    res.status(400).json({ message: errorMessage });
  }
};

module.exports = validate;