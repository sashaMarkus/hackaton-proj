const user = require("../models/user");

async function addUser(email, passwordHash, firstName, lastName) {
  // connection to MongoDB
  const userObj = await user.create({
    email,
    password: passwordHash,
    name: `${firstName} ${lastName}`,
  })

}
exports.addUser = addUser;

async function getUserByEmail(email) {
  // connection to MongoDB
}
exports.getUserByEmail = getUserByEmail;

async function getUserById(userId) {
  // connection to MongoDB
}
exports.getUserById = getUserById;

function updateUser(userId) {
  // connection to MongoDB
}
exports.updateUser = updateUser;
