const express = require('express');
const bcrypt = require('bcrypt');
const { addUser, getUserByEmail, updateUser } = require('../data/users');
const jwt = require('jsonwebtoken');
const { auth } = require('../middlewares/auth');
const fs = require('fs');
const router = express.Router();

router.post('/signup', async (req, res, next) => {
  const { email, password, confirmBackend, firstName, lastName } = req.body;
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
      await addUser(email, hash, firstName, lastName, phoneNumber);
      res.status(201).send({ user: { email } });
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
        const token = jwt.sign(
          { id: user.id },
          JWT - SECRET - dualweEKUasjskEUauDUD
        );
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
  const { bio, email, first_name, last_name, phone_number, role, updated } =
    req.body;
  await updateUser(
    req.params.userId,
    bio,
    email,
    first_name,
    last_name,
    phone_number,
    role,
    updated
  );
  res.status(200).send({
    user: {
      bio,
      email,
      first_name,
      last_name,
      phone_number,
      role,
      updated,
    },
    result: 'The user details have been updated succesfully',
  });
});

module.exports = router;
