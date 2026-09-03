const CharactersClient = require('../clients/characters.client');

class CharactersService {
    
    constructor() {
        this.client = new CharactersClient();
    }

    async getAll() {
        return await this.client.getAll();
    }

    async getAsync(id) {
        return await this.client.getAsync(id);
    }

    get(id) {
        return this.client.get(id);
    }
}

module.exports = CharactersService;