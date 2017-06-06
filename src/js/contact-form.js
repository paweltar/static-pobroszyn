import $ from 'jquery';

$(document).ready(function() {
    $('#contact-form').submit(function(event) {
        $.ajax({
            url: 'https://formspree.io/paweltar@gmail.com',
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            beforeSend: function(data) {
                $('.form-overlay--sending').fadeIn(300);
            },
            success: function(data) {
                console.log('success');
                $('.form-overlay--sending').fadeOut(300);
                $('.form-overlay--success').fadeIn(300).delay(5000).fadeOut(300);
                $('input[name=_replyto]').val('');
                $('textarea[name=message]').val('');
            },
            error: function(err) {
                $('.form-overlay--sending').fadeOut(300);
                console.log('error' + err.responseText);
                $('.form-overlay--error').fadeIn(300).delay(5000).fadeOut(300);
            }
        });
        event.preventDefault();
    });
});
