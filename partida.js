$(document).ready(function () {

  //Capturo el valor del parametro de la URL

  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var nick = urlParams.get("nick");
  $(".nombreJugador").html(nick);

  

  let tamañoJuego = 100;        /*tamaño boardsize*/  
  let velocidadJuego= 100;
  const campoJuego = $(".campoJuego");
  const direcciones={
     ArrowUp: -1,
     ArrowDown: 1,
     ArrowLeft: -0.01,
     ArrowRight: 0.01,
  }
  var tipoObjeto ={
    vacio : 0,
    cuerpoSerpiente : 1,
    comida : 2,
 }

  let serpiente = [];
  let score = 0;
  let direccion="ArrowRight";
  let tableroCuadrado = [];/*tablero general*/
  let vacioCuadrado = [];/* para poder generar la comida*/
  let movimientoIntervalo;/*funcion que ejecuta otra funcion cada determinado tiempo velocidadJuego, imprime el tablero*/

  $("#btnVolver").click(function () {
    window.location.replace("home.html");
  });
  $("#btnConfiguracion").click(function () {
    window.location.replace("config.html");
  });
  $("#btnEmpezar").click(function () {
    definirJuego();
    });
  const definirJuego=()=>{
    serpiente = ["00.00","01.00","02.00","03.00"];
    score=0;
    direccion="ArrowRight";/* p q ""? */
    tableroCuadrado=Array.from(Array(tamañoJuego), () => new Array(tamañoJuego).fill(tipoObjeto.vacio));
    console.log(tableroCuadrado);
    }


  

  
  console.log(tipoObjeto);
});
