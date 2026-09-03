const express = require('express');

const errorHandler = require('../middlewares/error.handler');
const charactersRouter = require('./characters.router');

const router = express.Router();

router.use('/characters', charactersRouter);

router.use(errorHandler);

module.exports = router;