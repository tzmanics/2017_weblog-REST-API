const postsController = require('../controllers').posts;

module.exports = app => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Well, hello there! Welcome to the Weblog API 😘'
  }));

  app.post('/api/posts', postsController.create);
};
