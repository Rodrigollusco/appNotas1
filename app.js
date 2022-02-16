// let tareas = require("./tareas.json");

// console.log(tareas);

const process = require("process");
const listar = require("./funcionesDeTareas");
const operacion = process.argv[2];

switch (operacion) {
  case "listar":
    listar();
    break;
  case undefined:
    console.log("Atención  - Tienes que pasar una acción​.");
    break;
  default:
    console.log("​No entiendo qué quieres hacer​.");
    break;
}
