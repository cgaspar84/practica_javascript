

class Dog {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

  setDogStatus(status) {
    this.status = status;
  }

  getDogStatus() {
    switch (this.status) {
      case 1: 
      return 'En Adopcion';
      case 2:
      return 'En proceso adopcion';
      case 3:
      return 'Adoptado';
    }
  }
}

let registerDogs = [];

function addNewDog() {
  let iDogName = window.prompt("Ingrese nombre del perro");
  let iGenderDog = window.prompt("Ingrese genero del perro");
  let iAgeDog = window.prompt("Ingrese edad del perro");
  let iDogStatus = window.prompt("Ingrese estado de adopcion [1: En Adopcion, 2: En proceso adopcion, 3: Adoptado]");

  let iDog = new Dog(iDogName, iGenderDog, iAgeDog);
  iDog.setDogStatus(parseInt(iDogStatus, 10));

  registerDogs.push(iDog);
}

function reportStatusDogs() {
    console.log("=== REPORTE: TODOS LOS PERROS");
    for (let i1= 0; i1< registerDogs.length; i1++) {
        console.log(JSON.stringify(registerDogs[i1]));
    }

    console.log("=== REPORTE: PERROS EN ADOPCION");
    for (let i2= 0; i2< registerDogs.length; i2++) {
        if (registerDogs[i2].status === 1) {
            console.log(JSON.stringify(registerDogs[i2]));
        }
    }

    console.log("=== REPORTE: PERROS EN PROCESO ADOPCION");
    for (let i3= 0; i3< registerDogs.length; i3++) {
        if (registerDogs[i3].status === 2) {
            console.log(JSON.stringify(registerDogs[i3]));
        }
    }

    console.log("=== REPORTE: PERROS ADOPTADOS");
    for (let i4= 0; i4< registerDogs.length; i4++) {
        if (registerDogs[i4].status === 3) {
            console.log(JSON.stringify(registerDogs[i4]));
        }
    }
}

function loadDogList() {

  do {
    addNewDog();
  } while (window.confirm("Desea agregar otro perro?"));

  reportStatusDogs()
}


