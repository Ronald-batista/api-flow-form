const connection = require("../database/connection");

const responseModel = {
  success: false,
  data: [],
  error: [],
};

module.exports = {
  // Show all submitions received
  async show(req, res) {
    const response = { ...responseModel };

    try {
      const [, data] = await connection.query(` SELECT * FROM answers;`);

      if (data.length > 0) {
        (response.success = true),
        (response.data = data);
      }
      return res.json(response);
    } catch (error) {
      response.error = error;
      return res.json(response);
    }
  },

  async create(req, res) {
      const response = {...responseModel}
    try {
      const name = req.body.answers[0];
      const email = req.body.answers[1];
      const phone = req.body.answers[2];
      const business = req.body.answers[3];
      const qt_employeers = req.body.answers[4];
      const ramo = req.body.answers[5];
      const satisfacao = req.body.answers[7];
      const comunicacao_interna = req.body.answers[8];
      const gestão_equipe = req.body.answers[9];
      const interacao_usuario = req.body.answers[10];
      const interacao_novo_usuario = req.body.answers[11];
      const organizacao = req.body.answers[12];
      const processos = req.body.answers[13];
      const demandas = req.body.answers[14];
      const gestao_financeira = req.body.answers[15];
      const acessibilidade = req.body.answers[16];
      const conexao_cliente = req.body.answers[17];
      const conversao = req.body.answers[18];
      const principais_dores = req.body.answers[19];
     
      const [data] = await connection.query(`
          INSERT INTO answers
           VALUES (
              DEFAULT,
              '${name}',
              '${email}',
              '${phone}',
              '${business}',
              '${qt_employeers}',
              '${ramo}',
              '${satisfacao}',
              '${comunicacao_interna}',
              '${gestão_equipe}',
              '${interacao_usuario}',
              '${interacao_novo_usuario}',
              '${organizacao}',
              '${processos}',
              '${demandas}',
              '${gestao_financeira}',
              '${acessibilidade}',
              '${conexao_cliente}',
              '${conversao}',
              '${principais_dores}'
          );
      `);

      response.success = true;
      response.data = data;

      return res.json(response);
      }catch (error) {
        response.error = error
      return res.json(response);
      }
    
  },
};
