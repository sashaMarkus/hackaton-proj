const { query } = require('../lib/db');
const SQL = require('@nearform/sql');

function addUser(email, passwordHash) {
  // connection to MongoDB
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
