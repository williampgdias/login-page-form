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
