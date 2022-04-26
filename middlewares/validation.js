function validateText(req, res, next) {
  const text = req.body.text;
  if (!text) {
    return res.status(400).json({ message: 'text is required' });
  }
  next();
}


module.exports = {
  validateText,
};
