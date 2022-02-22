$(document).ready(function () {
  $(".snake").hide();

  $(".start").click(function () {
    $(".snake").show();
    $(".start").hide();

    console.log($(".snake").position());
    $cordenadas = $(".snake").position();
    $datosArray = Object.values($cordenadas);
    console.log($datosArray);
    $x = $datosArray[0];
    $y = $datosArray[1];
    console.log("x: " + $x + " | y: " + $y);

    var minTop = 1;
    var maxTop = 700;

    var minLef = 1;
    var maxLef = 600;

    var corTop = Math.floor(Math.random() * (maxTop - minTop + 1) + minTop);
    var corLef = Math.floor(Math.random() * (maxLef - minLef + 1) + minLef);

    console.log(corTop);
    console.log(corLef);

    $(".snake").offset({ top: corTop, left: corLef });

    $(document).keypress(function (event) {
      var key = event.keyCode ? event.keyCode : event.which;
      var ch = String.fromCharCode(key);
      console.log("Presiono la tecla: " + ch);

      switch (ch) {
        case "8":
          console.log("Usted se movio hacia arriba con el numero 8");
          $(".snake").animate({ top: "-30px" });
          break;
        case "5":
          console.log("Usted se movio hacia abajo con el numero 5");
          $(".snake").animate({ top: "30px" });
          break;
        case "4":
          console.log("Usted se movio hacia la izquierda con el numero 4");
          $(".snake").animate({ left: "-30px" });
          break;
        case "6":
          console.log("Usted se movio hacia la derecha con el numero 6");
          $(".snake").animate({ left: "30px" });
          break;
        default:
          console.log("No ha presionado ninguna tecla");
      }
    });
  });
});
