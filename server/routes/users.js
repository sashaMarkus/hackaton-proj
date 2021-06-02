const express = require('express');
const bcrypt = require('bcrypt');
const { addUser, getUserByEmail, updateUserPictureUrl } = require('../data/users');
const jwt = require('jsonwebtoken');
const { upload } = require('../middlewares/multipart');
const { auth } = require('../middlewares/auth');
const { uploadToCloudinary } = require('../lib/cloudinary');
const fs = require('fs');
const router = express.Router();

// add request body validation
router.post('/', async (req, res, next) => {
  const { email, password } = req.body;
  bcrypt.hash(password, 10, async (err, hash) => {
    if (err) next(err);
    else {
      await addUser(email, hash);
      res.send({ user: { email } });
    }
  })
});

// add request body validation
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
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        res.send({
          token,
          user: {
            email: user.email,
            created_date: user.created_date,
            id: user.id
          }
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

router.put('/:userId/picture_url',
  auth,
  isSameUser,
  upload.single('image'),
  async (req, res) => {
    const result = await uploadToCloudinary(req.file.path);
    await updateUserPictureUrl(req.params.userId, result.secure_url);
    fs.unlinkSync(req.file.path);
    res.send({ pictureUrl: result.secure_url });
  });

module.exports = router;