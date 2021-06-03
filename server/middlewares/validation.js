const Ajv = require("ajv").default;
const ajv = new Ajv();

function validateBody(schema) {
  const validateNewPoem = ajv.compile(schema);
  return (req, res, next) => {
    const valid = validateNewPoem(req.body);
    if (!valid) {
      res.status(400);
      res.send({ errors: validateNewPoem.errors });
    } else {
      next();
    }
  };
}

module.exports = validateBody;
