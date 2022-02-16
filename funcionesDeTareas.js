const tareas = require("./tareas.json");

function listarTareas() {
  //   const element = [];
  for (let i = 0; i < tareas.length; i++) {
    // element.push(tareas[i]);
    console.log(`Título: ${tareas[i].Titulo}, Estado: ${tareas[i].Estado}`);
  }
  return tareas;
}

module.exports = listarTareas;
