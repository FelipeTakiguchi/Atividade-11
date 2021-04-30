const template = require('./template');
const cadastros = [];
module.exports.cadastros = cadastros;
module.exports.post = (req, res) => {
  const params = req.body;
  const { nome, email, senha, senhadois } = params;
  let status;
  let html;
  if ((nome !== '') & (email !== '') && senha !== '' && senhadois !== '') {
    if (senha === senhadois) {
      const cadastro = {
        novoNome: nome,
        novoEmail: email,
        novaSenha: senha,
        novaSenhaDois: senhadois,
      };
      cadastros.push(cadastro);
      status = 200;
      html = template(
        'Cadastrado com sucesso',
        `<p>Seja bem vindo ${nome}</p>`
      );
    } else {
      status = 401;
      html = template(
        'Senhas não batem',
        '<p>Confirme sua senha corretamente</p>'
      );
    }
  } else {
    status = 401;
    html = template(
      'Campos vazios',
      '<p>Preencha as informações necessárias e tente novamente</p>'
    );
  }
  res.status(status).send(html);
};
