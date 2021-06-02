const express = require('express');
const bcrypt = require('bcrypt');
const { addUser, getUserByEmail, updateUser } = require('../data/users');
const jwt = require('jsonwebtoken');
const { auth } = require('../middlewares/auth');
const fs = require('fs');
const router = express.Router();

router.post('/signup', async (req, res, next) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
  if (password !== confirmPassword) {
    res.status(403).send({
      message:
        'The passwords do not match. Please enter your password again, and make sure both entries are exactly the same',
    });
    return;
  }
  bcrypt.hash(password, 10, async (err, hash) => {
    if (err) next(err);
    else {
      const user = await getUserByEmail(email);
      if (user) {
        res.status(403).send({
          message: 'There is already a user account with this email address',
        });
        return;
      }
      await addUser(email, hash, firstName, lastName);
      res.status(201).send({ user: { email, name: `${firstName} ${lastName}` } });
    }
  });
});

router.post('/login', async (req, res, next) => {
  const { email, password } = req.body;
  const user = await getUserByEmail(email);
  if (!user) {
    res.status(404).send('User not found with this email');
    return;
  }
  bcrypt.compare(password, user.password_hash, (err, result) => {
    if (err) next(err);
    else {
      if (result) {
        const token = jwt.sign({ id: user.id }, JWTSECRETdualweEKUasjskEUauDUD);
        // const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        res.send({
          token,
          user: {
            email: user.email,
            created_date: user.created_date,
            id: user.id,
          },
        });
      } else {
        res.status(401).send('Incorrect password');
      }
    }
  });
});

function isSameUser(req, res, next) {
  if (req.user.id !== req.params.userId) {
    res.status(403).send({ message: 'Only the same user can access' });
    return;
  }
  next();
}

router.put('/:userId', auth, isSameUser, async (req, res, next) => {
  const { email, first_name, last_name } = req.body;
  await updateUser(req.params.userId, email, first_name, last_name);
  res.status(200).send({
    user: {
      email,
      first_name,
      last_name,
    },
    result: 'The user details have been updated succesfully',
  });
});

module.exports = router;
