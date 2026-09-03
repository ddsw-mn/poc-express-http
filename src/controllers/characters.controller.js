const CharactersService = require('../services/characters.service');

class CharactersController {
    
    constructor() {
        this.service = new CharactersService();
    }

    async list(_req, res) {
        const characters = await this.service.getAll();
        res.status(200).json(characters);
    }

    async retrieveAsync(req, res, next) {
        try {
            const character = await this.service.getAsync(req.params.id);
            res.status(200).json(character);
        } catch (error) {
            next(error);
        }
    }

    retrieve(req, res) {
        return this.service.get(req.params.id)
            .then(character => res.status(200).json(character));
    }

}

module.exports = CharactersController;