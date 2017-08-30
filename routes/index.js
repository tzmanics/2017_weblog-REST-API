const express = require('express');
const router = express.Router();

const db = require('../queries');

router.get('/api/posts', db.getAllPosts);
router.get('/api/post/:id', db.getSinglePost);
router.post('/api/posts', db.createPost);
router.put('/api/posts/:id', db.updatePost);
router.delete('/api/posts/:id', db.deletePost);
module.exports = router;
