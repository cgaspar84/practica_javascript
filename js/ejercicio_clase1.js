

function doMathTables(iFromValue, iToValue) {
    if (iToValue < iFromValue) {
      console.error("El valor de fin es menor al inicial!!");
    }
    for (let i = iFromValue; i <= iToValue; i++) {
      var auxValue = 0;
      console.log("Tabla de multiplicar para valor: " + i);
      for (let j = 1; j < 11; j++) {
        auxValue = i * j;
        console.log(i + " x " + j + " = " + auxValue);
      }
    }
  }
  
  
  //doMathTables(2, 5);
  
  function doMathExercise() {
    var valueA = prompt("Ingrese primer valor :");
  
    var valueB = prompt("Ingrese segundo valor :");
  
    doMathTables(valueA, valueB);
  }