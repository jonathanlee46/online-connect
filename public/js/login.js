console.log("Login JS called")

//login button click event
$('.whiteBoard').on('click', '#login_button', function(event){
  event.preventDefault(); //you ain't goin nowhere!

  //define form data
 
  var form_data = $('.login_wrapper').first().children().first().serialize()

  //send form data to server via ajax
  debugger
    $.ajax({
    url: '/login',
    type: 'POST',
    data: form_data
  }).done( function(game_page){

    $('.whiteBoard').empty();
    $('.whiteBoard').html(game_page);
  });

});


//register button click event
// $('#register_button').click(function(event){
$('.whiteBoard').on('click', '#register_button', function(event){
  event.preventDefault();

  console.log('get fucked');
  var something = $.ajax({
    type: 'GET',
    url: '/register',
  }).done( function(register_page) {


    console.log('HOOOOLY SHIT');
    $('.whiteBoard').empty();
    $('.whiteBoard').html(register_page);

  });

});
