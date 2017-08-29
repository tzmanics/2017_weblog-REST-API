
const promise = require('bluebird');
const pgp = require('pg-promise')(options);

const connectionString = 'postgress://localhost:5432/posts'
const db = pgp(connectionString);

let options = {
  promiseLib: promise
};

module.exports = {
  getAllPosts: getAllPosts,
  getSinglePosts: getSinglePosts,
  createPost: createPost,
  updatePost: updatePost,
  removePost: removePost,
}