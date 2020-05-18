const descripcion = {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
};

const completado = {
        alias: 'c',
        default: true,
        desc: 'Marca como completado una tarea'
};

const argv = require('yargs')
    .command( 'crear', 'Crear un elemento por hacer', { descripcion })
    .command( 'actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado } )
    .command( 'listar', 'Lista todas las tareas por hacer' )
    .command( 'borrar', 'Borrar un elemento por hacer', { descripcion })
    .help()
    .argv;


module.exports = {

    argv

};