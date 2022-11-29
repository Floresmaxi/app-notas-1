const path = require('path');
const fs = require('fs');
const { default: nodeTest } = require('node:test');

const ruta = path.resolve(__dirname, 'data/tareas.json');
const tareas = fs.readFileSync(ruta, { encoding: 'utf-8'});
const lista = JSON.parse(tareas);

if (process.argv[2] === 'listar') {
    console.log('Listado de tareas'),
    console.log('_______________________________________');
    lista.forEach((value,index) => {
        console.log(`${index + 1} . ${value.titulo} - ${value.estado}`);
    });
} else if (process.argv[2] === undefined) {
    console.log('ATENCION - Tienes que pasar una accion\nLas acciones disponibles son: listar'),
    console.log('_______________________________________');    
} else if (process.argv[2].length > 0) {
    console.log('_______________________________________'),
    console.log('No entiendo que quieres hacer\nLas acciones disponibles son: listar'),
    console.log('_______________________________________');
};
