const template = require('./template');

module.exports = (req, res) => {
  const html = template(
    'Login',
    `
      <div class="row">
      <form action="/login" method="post">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email">
          <small id="emailHelp" class="form-text text-muted">Nunca compartilharemos seu e-mail com ninguém.</small>
        </div>
        <div class="form-group">
          <label for="senha">Senha</label>
          <input type="password" class="form-control" id="senha" placeholder="Senha">
        </div>
        <div class="col text-center">
          <button type="submit" class="btn btn-primary mt-4">Submit</button>
        </div>
      </form>
      </div>
    `
  );
  res.status(200).send(html);
};
