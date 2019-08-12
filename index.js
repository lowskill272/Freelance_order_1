$(document).ready(function() {

  $('#form').submit(function(e) {
    e.preventDefault();
    var name = $('.form__input-labels__input_name').val();
    var phone = $('.form__input-labels__input_phone').val();
    var email = $('.form__input-labels__input_email').val();

    $(".error").remove();

    if (email.length< 1) {
      $('.form__input-labels__input_email').css('border', '1px solid red');
    } else {
      var regEx = /^[а-яА-ЯёЁ]/;
      var validemail = regEx.test(email);
      if (!validemail) {
        $('.form__input-labels__input_email').css('border', '1px solid red');
      } else {
        $('.form__input-labels__input_email').css('border', '0');
      }
    }
    if (phone.length< 1) {
      $('.form__input-labels__input_phone').css('border', '1px solid red');
    } else {
      var regEx = /^[а-яА-ЯёЁ]/;
      var validphone = regEx.test(phone);
      if (!validphone) {
        $('.form__input-labels__input_phone').css('border', '1px solid red');
      } else {
        $('.form__input-labels__input_phone').css('border', '0');
      }
    }
    if (name.length< 1) {
      $('.form__input-labels__input_name').css('border', '1px solid red');
    } else {
      var regEx = /^[а-яА-ЯёЁ]/;
      var validname = regEx.test(name);
      if (!validname) {
        $('.form__input-labels__input_name').css('border', '1px solid red');
      } else {
        $('.form__input-labels__input_name').css('border', '0');
      }
    }
  });
});
