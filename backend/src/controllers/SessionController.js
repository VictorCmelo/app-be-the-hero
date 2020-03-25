const connection = require('../database/concection');

module.exports = {
    async create(resquest, response){
        const { id } = resquest.body;

        const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first();

        if(!ong){
            return response.status(400).json({ error: " No ONG found with this ID "});
        }

        return response.json(ong);
    }
}