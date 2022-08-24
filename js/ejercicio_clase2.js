function doMathTables(iFromValue, iToValue) {
    let resultTable = "";
    let counterColors = 0;
  
    document.getElementById("tableResult").innerHTML = "";
    if (iToValue < iFromValue) {
      console.error("El valor de fin es menor al inicial!!");
      alert("El valor de fin es menor al inicial!!");
    }
    for (let i = iFromValue; i <= iToValue; i++) {
      var auxValue = 0;
      console.log("Tabla de multiplicar para valor: " + i);
  
      resultTable += "<div class='multiplyTable";
      resultTable += " color-" + counterColors + "'>";
      resultTable += "<h3>Tabla del " + i + "</h3><ul>";
  
      for (let j = 1; j < 11; j++) {
        auxValue = i * j;
        console.log(i + " x " + j + " = " + auxValue);
  
        resultTable +=
          "<li>" + i + " x " + j + " = <span>" + auxValue + "</span></li>";
      }
  
      resultTable += "</ul></div>";
      counterColors++;
      if (counterColors > 4) {
        counterColors = 0;
      }
    }
  
    document.getElementById("tableResult").innerHTML = resultTable;
  }
  
  function doMathExercise() {
    var valueA = parseInt(document.getElementById("iValueA").value, 10);
    var valueB = parseInt(document.getElementById("iValueB").value, 10);
  
    doMathTables(valueA, valueB);
  }
  