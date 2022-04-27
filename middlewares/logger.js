const logger = (req, res, next) => {
  console.log(`
    ${req.method}
     ${req.path}
     ${JSON.stringify(req.body)}
     `);
  next();
};

module.exports = logger