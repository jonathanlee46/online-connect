$('.whiteBoard').on('click', '#forth_button', function(event) {

    event.preventDefault();
    console.log("I GO FORTH")

    
    $.ajax({
      type: 'GET',
      url: '/main',
    }).done(function(main_page){

      $('.whiteBoard').empty();
      $('.whiteBoard').html(main_page);

    })

  });
