
const promise = require('bluebird');

const options = {
  promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = 'postgress://localhost:5432/weblog_db'
const db = pgp(connectionString);

function getAllPosts(req, res, next) {
  db.any('select * from posts')
    .then(data => {
      res.status(202)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL posts.'
        });
    })
    .catch(err => {
      return next(err);
    })
}

function getSinglePost(req, res, next) {
  let postId = parseInt(req.params.id);
  db.one('select * from posts where id = $1', postId)
    .then(data => {
      res.status(202)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE posts.'
        });
    })
    .catch(err => {
      return next(err);
    })
}

function createPost(req, res, next) {
  db.none('insert into posts(author, location, title, content, tags)' +
    'values(${author},${location},${title},${content},${tags})',
    req.body)
    .then(() => {
      res.status(202)
        .json({
          status: 'success',
          message: 'Inserted one post.'
        });
    })
    .catch(err => {
      return next(err);
    })
}

function updatePost(req, res, next) {
  let reqBodyValues = [
    req.body.author,
    req.body.location,
    req.body.title,
    req.body.content,
    req.body.tags,
    parseInt(req.params.id)
  ];

  db.none(
    'update posts set author=$1, location=$2, title=$3, content=$4,tags=$5 where id=$5',
    reqBodyValues)
    .then(() => {
      res.status(202)
        .json({
          status: 'success',
          message: 'Updated post.'
        });
    })
    .catch(err => {
      return next(err);
    })
}

function deletePost(req, res, next) {
  let postId = parseInt(req.params.id);
  db.one('delete * from posts where id = $1', postId)
    .then(result => {
      res.status(202)
        .json({
          status: 'success',
          message: 'Removed ${result.rowCount} post.'
        });
    })
    .catch(err => {
      return next(err);
    })
}

module.exports = {
  getAllPosts: getAllPosts,
  getSinglePost: getSinglePost,
  createPost: createPost,
  updatePost: updatePost,
  deletePost: deletePost
}