$(document).ready(function () {


  //Valida datos y redirecciona a la mesa de juego.

  $("#btnJugar").click(function () {
    var nick = $("#nick").val();
    console.log(nick);

    if (nick === "" || nick === "") {
      Swal.fire("¡Espera!", "Debes Ingresar Un Nombre", "error");/*anuncio*/
    } else {
      window.location.replace("partida.html?nick=" + nick);/*usa metodo get y envia informacion visible, ? variableparametro "= + variable)*/
    }
  });
});
