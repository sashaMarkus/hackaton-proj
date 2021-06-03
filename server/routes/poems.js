const express = require('express');
const { createPoem } = require('../data/poems');
const { auth } = require('../middlewares/auth');
const fs = require('fs');
const S = require('fluent-json-schema').default;
const validateBody = require('../middlewares/validation');
const router = express.Router();

// 3
const NewPoemValidationSchema = S.object()
  .prop('personality', S.string().minLength(1).maxLength(20).required())
  .prop('inputString', S.string().minLength(1).maxLength(30).required())
  .prop('addToDatabase', S.boolean())
  .valueOf();

router.post(
  '/',
  // auth,
  validateBody(NewPoemValidationSchema), //
  async (req, res, next) => {
    const { personality, inputString, addToDatabase } = req.body;
    try {
      const result = await createPoem(personality, inputString, addToDatabase);
      res.status(201);
      res.send(result);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;

const loadPetById = async () => {
  try {
    getPetById(id, auth.token).then((data) => {
      setPet(data);
      if (data.picture_url) setPetPicURL(data.picture_url);
      if (!data.picture_url) {
        if (data.type === 'dog') setPetPicURL('../dog.png');
        if (data.type === 'cat') setPetPicURL('../cat.png');
      }
    });
  } catch (error) {
    console.log(error);
  }
};
