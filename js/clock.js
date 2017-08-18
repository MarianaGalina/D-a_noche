$(document).ready(function(){
  // var $h2 = $('h2');
  var $hours = $('#hours');
  var $minutes = $('#minutes');
  var $seconds = $('#seconds');
  function updateTime(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var human_date = date.getFullYear() + ' - ' + (date.getMonth()+1) + ' - ' + date.getDate();
    // $h2.text( human_date );
    $('#hours').text( hours + " horas" );
    $('#minutes').text( minutes + " minutos" );
    $('#seconds').text( seconds + " segundos");

    $('#human').text( human_date );

    if( hours >= 6 && hours <= 18 ){
      // es de día
      $('#theme-url').attr('href','https://bootswatch.com/cosmo/bootstrap.min.css');
$('#dia').html('<p><center><img src="img/sol.gif"></p><p>Es de noche</p></center>')

    }else{
      // Es de noche
      $('#theme-url').attr('href','https://bootswatch.com/darkly/bootstrap.min.css');
$('#noche').html('<p><center><img src="img/luna.gif"></p><p>Es de noche</p></center>')

    }


  }
  var seconds_interval = setInterval(updateTime, 1000);
  updateTime();
});
