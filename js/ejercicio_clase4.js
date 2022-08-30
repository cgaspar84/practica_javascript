let arrPersons = [];
let counter = 0;

const MAX_REGISTERS = 10;

function registerPerson() {
  let iName = document.getElementById("iName").value;
  let iSurname = document.getElementById("iSurname").value;
  let iTelephone = document.getElementById("iTelephone").value;
  let iBirthdate = new Date(document.getElementById("iBirthdate").value);

  if (iName === "" || iSurname === "") {
    window.alert("Sin datos");
    return;
  }

  let yy = iBirthdate.getFullYear();

  console.log(yy);

  // Insert date ordered by birthdate
  let posic = 0;
  while (posic < arrPersons.length) {
    if (iBirthdate > arrPersons[posic][3]) {
      posic++;
    } else {
      break;
    }
  }

  console.log("posic:" + posic);

  let arrAux = arrPersons.splice(posic, 0, [
    iName,
    iSurname,
    iTelephone,
    iBirthdate
  ]);

  console.log("arrAux:" + arrAux);
  console.log("arrPersons:" + arrPersons);

  counter++;
  document.getElementById("counter").innerHTML = counter;

  // Clear fields on form
  document.getElementById("iName").value = "";
  document.getElementById("iSurname").value = "";
  document.getElementById("iTelephone").value = "";
  document.getElementById("iBirthdate").value = "";

  window.alert("Usuario registrado!");

  if (counter >= MAX_REGISTERS) {
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
    "<thead><tr><th>FECH NAC.</th><th>NOMBRE</th><th>APELLIDO</th><th>TELEFONO</th></tr></thead>";
  strResult += "<tbody>";
  for (let i = 0; i < arrPersons.length; i++) {
    strResult += "<tr>";
    console.log(arrPersons[i]);
    strResult += "<td>" + arrPersons[i][3].toLocaleDateString() + "</td>";

    strResult += "<td>" + arrPersons[i][0] + "</td>";

    strResult += "<td>" + arrPersons[i][1] + "</td>";

    strResult += "<td>" + arrPersons[i][2] + "</td></tr>";
  }
  strResult += "</tbody></table>";

  document.getElementById("resultList").innerHTML = strResult;
  console.log(strResult);
}
