const template = require('./template');
const cadastros = [{}];
module.exports.cadastros = cadastros;
module.exports.post = (req, res) => {
  const params = req.body;
  const { email, senha, senhadois } = params;
  let status;
  let html;
  if (email !== '' && senha !== '' && senhadois !== '') {
    const cadastro = {
      novoEmail: email,
      novaSenha: senha,
      novaSenhaDois: senhadois,
    };
    cadastros.push(cadastro);
    status = 200;
    html = template('Cadastrado com sucesso', `<p>Seja bem vindo ${email}</p>`);
  } else {
    status = 401;
    html = template(
      'Campos vazios',
      '<p>Preencha as informações necessárias e tente novamente</p>'
    );
  }
  res.status(status).send(html);
};
