const express = require('express');
const router = express.Router();

const PostController = require('../Controllers/postController');

router.post('/filter', PostController.getPosts);
router.post('/getPostById', PostController.getPostById);

module.exports = router;