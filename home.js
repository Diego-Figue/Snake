$(document).ready(function () {


  //Valida datos y redirecciona a la mesa de juego.

  $("#btnJugar").click(function () {
    var nick = $("#nick").val();
    console.log(nick);

    if (nick === "" || nick === "") {
      Swal.fire("¡Espera!", "Debes Ingresar Un Nombre", "error");
    } else {
      window.location.replace("partida.html?nick=" + nick);
    }
  });
});
