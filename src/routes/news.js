const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController')


// [GET] /news/:slug
router.get('/:slug', newsController.show);

// [GET] /news/
router.get('/', newsController.index);

module.exports = router;