$(document).ready(() => {
  $('#submitBtn').click((event) => {
    event.preventDefault();
    console.log('Submit button is working');
    const name = $('#name');
    const email = $('#email');
    const phone = $('#phone');
    const required = [name, email, phone];

    required.forEach(element => {
      if (element.val() === "") {
        $('#message').html('Please Fill Out Required Fields').addClass('warning');
        $('label').eq(required.indexOf(element)).addClass('warning');
      } else {
        $('label').eq(required.indexOf(element)).removeClass('warning');
      }
    });

    if (!$('label').hasClass('warning')) {
      $('form').remove();
      $('h2').text('Thanks for your feedback!');
    }
  });
});