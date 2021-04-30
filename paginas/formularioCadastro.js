const template = require('./template');

let teste = 0;
module.exports = (req, res) => {
    console.log(teste);
    teste++;
  const html = template(
    'Cadastro',
    `
      <div class="row">
        <form action="/cadastro" method="post">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Email">
            <small id="emailHelp" class="form-text text-muted">Nunca compartilharemos seu e-mail com ninguém.</small>
          </div>
          <div class="form-group">
            <label for="senha">Senha</label>
            <input type="password" class="form-control" name="senha" id="senha" placeholder="Senha">
          </div>
          <div class="form-group">
            <label for="senhadois">Repetir Senha</label>
            <input type="password" class="form-control" name="senhadois" id="senhadois" placeholder="Repetir Senha">
          </div>
          <div class="col">
            <button type="submit" class="btn btn-primary mt-4">Submit</button>
          </div>
        </form>
      </div>
    `
  );
  res.status(200).send(html);
};
