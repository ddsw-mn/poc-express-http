const axios = require('axios');

class CharactersClient {
    
    constructor() {
        this.baseUrl = 'https://rickandmortyapi.com/api/character';
        //this.baseUrl = 'https://harry-potter-api.onrender.com/personajes';
    }

    async getAll() {
        const response = await axios.get(this.baseUrl);
        return response.data;
    }

    async getAsync(id) {
        const response = await axios.get(`${this.baseUrl}/${id}`);
        return response.data;
    }

    get(id) {
        return axios.get(`${this.baseUrl}/${id}`)
            .then(response => response.data);
    }

}

module.exports = CharactersClient;