const path = require('path');
const fs = require('fs');
/*const { default: nodeTest } = require('node:test');*/

const ruta = path.resolve(__dirname, 'data/tareas.json');
const tareas = fs.readFileSync(ruta, { encoding: 'utf-8'});
const lista = JSON.parse(tareas);

function leerJason(rutaAlJson) {
    const list = fs.readFileSync(ruta, {encoding: 'utf-8' });
    const obj = JSON.parse(tareas);
    return obj;
};

function escribirJson(arr) {
    arr = JSON.stringify(arr);
    fs.writeFileSync(ruta, arr);
};

function guardarJson(string, array ) {
    let nuevaTarea = {titulo: string, estado: "pendiente"};
    array.push(nuevaTarea);
    return array;
}

if (process.argv[2] == 'listar') {
    console.log('Listado de tareas'),
    console.log('_______________________________________');
    lista.forEach((value,index) => {
        console.log(`${index + 1} . ${value.titulo} - ${value.estado}`);
    });
} else if (process.argv[2] == undefined) {
    console.log('ATENCION - Tienes que pasar una accion\nLas acciones disponibles son: listar y crear'),
    console.log('_______________________________________');    
} else if ((process.argv[2].length > 0) && (process.argv[2] !== 'crear')){
    console.log('_______________________________________'),
    console.log('No entiendo que quieres hacer\nLas acciones disponibles son: listar y crear'),
    console.log('_______________________________________');
    
} else if ((process.argv[2] == 'crear') && (process.argv[3])) {
    console.log('Nueva tarea creada');
    console.log('_______________________________________');
    const leer = leerJason('data/tareas.json');
    const leer2 = guardarJson(process.argv[3], leer);
    escribirJson(leer2);
    leer2.forEach((string, estado) => {
        console.log(`${string} ${'->'} ${leer2[leer2.length - 1].estado}`)}) ;
    
} else if (process.rgv[2] == 'crear') {
    console.log('Error no ingreso una nueva tarea');
};
