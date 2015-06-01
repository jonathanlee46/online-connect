
  $('.whiteBoard').on('click', '#reg_done_button', function(event) {

    event.preventDefault();
    console.log("reg done")

    var form_data = $(this).siblings().last().serialize();
   
    console.log('reg is shit')

    $.ajax({
      type: 'POST',
      url: '/register',
      data: form_data
    }).done(function(reg_complete_page){

      $('.whiteBoard').empty();
      $('.whiteBoard').html(reg_complete_page);

    })

  });

