const connection = require('../database/connection')

const responseModel = {
    success: false,
    data: [],
    error: []
}

module.exports = {

    // async create(req, res) {
    //     const response = {...responseModel}

    //     const { username, password } = req.body;

    //     const [id, affectedRows] = await connection.query(`
    //         INSERT INTO users VALUES (
    //             DEFAULT,
    //             '${username}',
    //             '${password}',
    //             NOW(),
    //             NOW()
    //         );
    //     `)

    //     if(affectedRows > 0) {
    //         response.success = true
    //         response.data = [{ token: await createToken(id) }]
    //     }

    //     return res.json(response)
    // },

    async show(req, res) {
        const response = { ...responseModel }
        
        try {
            const [, data] = await connection.query(` SELECT * FROM teste;`);
            
            if(data.length > 0) {
                response.success = true,
                response.data = data
            }
            return res.json(response);

        } catch (error) {
            response.error = error
            return res.json(response);
        }
       
    }

}
