$(document).ready(function () {

  //Capturo el valor del parametro de la URL

  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var nick = urlParams.get("nick");

  $(".nombreJugador").html(nick);

  $("#btnVolver").click(function () {
    window.location.replace("home.html");
  });
  
  const campoJuego = $(".campoJuego");

  let serpiente;
  // var tipoObjeto = {
  //   defecto = 0,
  //   cuerpoSerpiente = 1,
  //   comida = 2
  // }

  serpiente = ["00","01","02","03"];
  console.log(tipoObjeto);
});
