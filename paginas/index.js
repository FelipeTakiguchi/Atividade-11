const template = require('./template');

module.exports = (req, res) => {
  const html = template(
    'Página Inicial',
    `<div class="row row-cols-lg-8">
     <div class="col">
     <p class="fw-bolder">Seja bem vindo ao nosso site</p>
     <p class="fw-bolder">Conheça o nosso Campus!</p>
     <img id="img-IFPR" class="img-thumbnail" src="imagens/Foto-Campus.jpg" alt="foto do campus">
     </div>
     <div class="col">
     <p>O Instituto Federal do Paraná (IFPR) é uma instituição pública federal de ensino vinculada ao Ministério da Educação (MEC) por meio da Secretaria de Educação Profissional e Tecnológica (Setec). É voltada a educação superior, básica e profissional, especializada na oferta gratuita de educação profissional e tecnológica nas diferentes modalidades e níveis de ensino.</p>
     <p>A instituição foi criada em dezembro de 2008 através da Lei 11.892, que instituiu a Rede Federal de Educação Profissional e Tecnológica e os 38 institutos federais hoje existentes no país. Com a Lei em vigor, a Escola Técnica da Universidade Federal do Paraná (ET-UFPR) foi transformada no IFPR, que hoje possui autonomia administrativa e pedagógica.</p>
     <p class="fst-italic">Acesse nossas redes para se manter informado sobre o campus!</p>
     <img class="logo" src="imagens/facebook-icone.png" alt="icone do facebook">
     <img class="logo" src="imagens/youtube-icone.png" alt="ícone do youtube">
     <img class="logo" src="imagens/instagram-icone.png" alt="ícone do instagram">
     </div>
     </div>`
  );
  res.status(200).send(html);
};
