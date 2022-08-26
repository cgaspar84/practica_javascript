let arrPersons = [];
let counter = 0;

function registerPerson() {
  let iName = document.getElementById("iName").value;
  let iSurname = document.getElementById("iSurname").value;
  let iTelephone = document.getElementById("iTelephone").value;

  if (iName === "" || iSurname === "") {
    window.alert("Sin datos");
    return;
  }

  arrPersons.push([iName, iSurname, iTelephone]);

  counter++;
  document.getElementById("counter").innerHTML = counter;

  // Clear fields on form
  document.getElementById("iName").value = "";
  document.getElementById("iSurname").value = "";
  document.getElementById("iTelephone").value = "";

  window.alert("Usuario registrado!");

  if (counter >= 10) {
    showFullList();
    counter = 0;
    document.getElementById("counter").innerHTML = counter;
  }
}

function showFullList() {
  counter = 0;
  document.getElementById("resultList").innerHTML = "";
  let strResult = "<h2>Usuarios Registrados</h2>";

  strResult += "<table class='resultTable'>";

  strResult +=
    "<thead><tr><th>NOMBRE</th><th>APELLIDO</th><th>TELEFONO</th></tr></thead>";
  strResult += "<tbody>";
  for (let i = 0; i < arrPersons.length; i++) {
    strResult += "<tr>";
    console.log(arrPersons[i]);
    strResult += "<td>" + arrPersons[i][0] + "</td>";

    strResult += "<td>" + arrPersons[i][1] + "</td>";

    strResult += "<td>" + arrPersons[i][2] + "</td></tr>";
  }
  strResult += "</tbody></table>";

  document.getElementById("resultList").innerHTML = strResult;
  console.log(strResult);
}
