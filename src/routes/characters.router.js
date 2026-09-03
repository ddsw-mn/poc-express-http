const express = require('express');

const CharactersController = require('../controllers/characters.controller');

const router = express.Router();
const charactersController = new CharactersController();

router.get('/', (req, res, next) => charactersController.list(req, res, next));

router.get('/:id', (req, res) => charactersController.retrieve(req, res));
router.get('/:id/async', (req, res, next) => charactersController.retrieveAsync(req, res, next));

module.exports = router;