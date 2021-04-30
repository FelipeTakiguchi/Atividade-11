const template = require('./template');
const validaCadastro = require('./validaCadastro');

module.exports.post = (req, res) => {
  const listaCadastros = validaCadastro.cadastros;
  const params = req.body;
  const { email, senha } = params;
  let status;
  let html;
  let ok = false;

  for (let i = 0; i < listaCadastros.length; ) {
    const cadastro = listaCadastros[i];
    console.log(cadastro);
    if (email === cadastro.novoEmail && senha === cadastro.novaSenha) {
      ok = true;
      status = 200;
      html = template('Logado com sucesso', `<p>Seja bem vindo ${email}</p>`);
    }
    i += 1;
  }
  if (!ok) {
    status = 401;
    html = template(
      'Login ou senha inválidos',
      '<p>Retorne e tente novamente</p>'
    );
  }
  res.status(status).send(html);
};
