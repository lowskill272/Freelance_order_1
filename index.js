$(document).ready(function() {

  $('#form').submit(function(e) {
    var name = $('.form__input-labels__input_name').val();
    var phone = $('.form__input-labels__input_phone').val();
    var email = $('.form__input-labels__input_email').val();

    if (email.length< 1) {
      e.preventDefault();
      $('.form__input-labels__input_email').css('border', '1px solid red');
    } else {
      var regEx = /^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+(\-)?[a-zA-Z0-9]+(\.)?[a-zA-Z0-9]{2,6}?\.[a-zA-Z]{2,6}$/;
      var validemail = regEx.test(email);
      if (!validemail) {
        e.preventDefault();
        $('.form__input-labels__input_email').css('border', '1px solid red');
      } else {
        $('.form__input-labels__input_email').css('border', '0');
      }
    }

    if (phone.length< 1) {
      e.preventDefault();
      $('.form__input-labels__input_phone').css('border', '1px solid red');
    } else {
      var regEx = /^[\d+ -]/;
      var validphone = regEx.test(phone);
      if (!validphone) {
        e.preventDefault();
        $('.form__input-labels__input_phone').css('border', '1px solid red');
      } else {
        $('.form__input-labels__input_phone').css('border', '0');
      }
    }

    if (name.length< 1) {
      e.preventDefault();
      $('.form__input-labels__input_name').css('border', '1px solid red');
    } else {
      var regEx = /^[а-яА-ЯёЁ]/;
      var validname = regEx.test(name);
      if (!validname) {
        e.preventDefault();
        $('.form__input-labels__input_name').css('border', '1px solid red');
      } else {
        $('.form__input-labels__input_name').css('border', '0');
      }
    }
  });
});
