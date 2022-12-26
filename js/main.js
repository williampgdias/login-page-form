/*
  EU QUERO FAZER COM QUE SE EU NÃO COLOCAR NENHUMA INFORMAÇÃO, APARECER OS ÍCONES DE ERRO,
  MAS CONFORME EU FOR COLOCANDO AS INFORMAÇÕES DE LOGIN, VÁ APAGANDO OS ÍCONES ONDE EU DIGITO.
  ACABANDO FAZER UM IF PARA CADA INPUT, MAS ACHO QUE FICOU MUITO GRANDE.
  FIZ DE UMA FORMA ANTES QUE EU CONSEGUIA MOSTRAR OS ÍCONES, MAS NÃO CONSEGUIA TIRAR
  E QUANDO TIRAVA, TIRAVA TODOS OS ÍCONES.
  OBRIGADO PELA AJUDA, MEU AMIGO. GRANDE ABRAÇO.
*/

$(document).ready(function () {
  $('#btn').click(function (e) {
    e.preventDefault();

    // DECLARANDO VARIÁVEIS DOS INPUTS
    var inputErrorName = $('#inputName').val();
    var inputErrorLastName = $('#inputLastName').val();
    var inputErrorEmail = $('#inputEmail').val();
    var inputErrorPassword = $('#inputPassword').val();

    // DECLARANDO VARIÁVEIS IMGS
    var iconErrorImgName = $('#iconErrorName');
    var iconErrorImgLastName = $('#iconErrorLastName');
    var iconErrorImgEmail = $('#iconErrorEmail');
    var iconErrorImgPassword = $('#iconErrorPassword');

    if (!inputErrorName) {
      iconErrorImgName.css('display', 'block');
    } else {
      iconErrorImgName.css('display', 'none');
    }

    if (!inputErrorLastName) {
      iconErrorImgLastName.css('display', 'block');
    } else {
      iconErrorImgLastName.css('display', 'none');
    }

    if (!inputErrorEmail) {
      iconErrorImgEmail.css('display', 'block');
    } else {
      iconErrorImgEmail.css('display', 'none');
    }

    if (!inputErrorPassword) {
      iconErrorImgPassword.css('display', 'block');
    } else {
      iconErrorImgPassword.css('display', 'none');
    }
  });
});
