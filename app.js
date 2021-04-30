const express = require('express');
const index = require('./paginas/index');
const formularioLogin = require('./paginas/formularioLogin');
const validaLogin = require('./paginas/validaLogin');
const validaCadastro = require('./paginas/validaCadastro');
const formularioCadastro = require('./paginas/formularioCadastro');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', index);
app.get('/login', formularioLogin);
app.post('/login', validaLogin.post);
app.get('/cadastro', formularioCadastro);
app.post('/cadastro', validaCadastro.post);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.`);
  console.log(`Acesse http://localhost:${port} para testar.`);
});
