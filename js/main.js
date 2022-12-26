// CRIANDO FUNÇÃO DE VALIDAÇÃO DE ERRO!
function validateInput(inputVar, imageVar) {
  if (!inputVar) {
    imageVar.css('display', 'block');
  } else {
    imageVar.css('display', 'none');
  }
}

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

    validateInput(inputErrorName, iconErrorImgName);
    validateInput(inputErrorLastName, iconErrorImgLastName);
    validateInput(inputErrorEmail, iconErrorImgEmail);
    validateInput(inputErrorPassword, iconErrorImgPassword);
  });
});
