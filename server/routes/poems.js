const express = require('express');
const { getPoem } = require('../data/poems');
const { auth } = require('../middlewares/auth');
const fs = require('fs');
const S = require('fluent-json-schema').default;
const validateBody = require('../middlewares/validation');
const router = express.Router();

// 3
const NewPoemValidationSchema = S.object()
  .prop('string', S.string().minLength(1).required())
  .prop('string', S.string().minLength(1).required())
  .prop('string', S.string().minLength(1).required())
  .valueOf();

router.post(
  '/',
  auth,
  validateBody(NewPoemValidationSchema), //
  async (req, res, next) => {
    const { personality, inputString, addToDatabase } = req.body;
    try {
      await createPoem(personality, inputString, addToDatabase);
      res.status(201);
      res.send({
        result: {
          created,
          personality,
          poem,
        },
      });
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
