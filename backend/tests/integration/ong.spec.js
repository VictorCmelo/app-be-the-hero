const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/concection');

describe('ONG', () => {
    beforeEach( async () => {
      await  connection.migrate.rollback();
      await  connection.migrate.latest();
    });


    afterAll( async () => {
       await connection.destroy();
    });

    it('should be able to create a new ONG',  async () => {
        const response =  await request(app)
        .post('/ongs')
        .send({
            name: "APASDD3",
            email: "contato@br.com.br",
            city: "Lages",
            whatsapp:"49999191709",
            uf:"SC"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    }); 
});