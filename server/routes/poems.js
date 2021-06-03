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
      await createPoem(personality, inputString, addToDatabase);
      res.status(201);
      res.send([
        'But I never heard it singing',
        "In my life I loved you more And I know I'll never lose affection",
        'Well, you can penetrate any place you go',
        "I'll never do you no harm If I fell in love with you",
        'And tenderly',
        'And she keeps calling',
        "And I will say the only words I know that you'll understand Michelle, ma belle",
        "In the Isle of Wight, if it's not too dear",
        "Goo goo g' joob Sitting in an English garden",
        'And I will sing a lullaby. Once there was a way',
        'And tenderly',
        'And I will sing a lullaby. Golden slumbers,',
        "I don't know how someone controlled you",
        'Yes, I get by with a little help from my friends',
        "I can't hide",
        'And tenderly',
        "I'll never do you no harm Oh! Darling, if you leave me",
        "I don't know why you say Goodbye, I say Hello. You say Yes, I say No.",
        "I don't know how someone controlled you",
        'I want to hold your hand And when I touch you',
      ]);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
