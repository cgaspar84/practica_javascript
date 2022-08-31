let arrPersons = [];
let arrPrices = [];

let counter = 0;

const MAX_REGISTERS = 10;

function registerPerson() {
  let iName = document.getElementById("iName").value;
  let iSurname = document.getElementById("iSurname").value;
  let iTelephone = document.getElementById("iTelephone").value;
  let iBirthdate = new Date(document.getElementById("iBirthdate").value);
  let iPrice = document.getElementById("iPrice").value;

  if (iName === "" || iSurname === "") {
    window.alert("Sin datos");
    return;
  }

  let registerPersonalData = {
    name: iName,
    surname: iSurname,
    telephone: iTelephone,
    birthdate: iBirthdate,
    price: iPrice
  };

  // Insert date ordered by birthdate
  let posic = 0;
  while (posic < arrPersons.length) {
    if (iBirthdate > arrPersons[posic].birthdate) {
      posic++;
    } else {
      break;
    }
  }

  console.log("posic:" + posic);

  let arrAux = arrPersons.splice(posic, 0, registerPersonalData);
  arrPrices.push(registerPersonalData.price);

  console.log("register:" + JSON.stringify(registerPersonalData));
  console.log("arrPersons:" + arrPersons);

  counter++;
  document.getElementById("counter").innerHTML = counter;

  // Clear fields on form
  document.getElementById("iName").value = "";
  document.getElementById("iSurname").value = "";
  document.getElementById("iTelephone").value = "";
  document.getElementById("iBirthdate").value = "";
  document.getElementById("iPrice").value = "";

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
    strResult +=
      "<td>" + arrPersons[i].birthdate.toLocaleDateString() + "</td>";

    strResult += "<td>" + arrPersons[i].name + "</td>";

    strResult += "<td>" + arrPersons[i].surname + "</td>";

    strResult += "<td>" + arrPersons[i].telephone + "</td></tr>";
  }
  strResult += "</tbody></table>";

  let subtotal = total();
  console.log("subtotal:" + subtotal);
  strResult += "<hr/><h4>Subtotal: " + subtotal + "</h4>";

  document.getElementById("resultList").innerHTML = strResult;
}

function total() {
  let total = 0;
  total = arrPrices.reduce(function (a, b) {
    return parseInt(a, 10) + parseInt(b, 10);
  });
  return total;
}
