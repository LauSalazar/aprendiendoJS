const alumnos = {
    listaAlumnos: [],
    get: function(id){
        return this.listaAlumnos[id];
    },
    crear: function(datos){
        this.listaAlumnos.push(datos);
    },
    listado: function(){
        return this.listaAlumnos;
    }
}
const infoAlumno1 = {
    nombre: 'Juan',
    edad: 20
}
const infoAlumno2 = {
    nombre: 'Pablo',
    edad: 21
}

alumnos.crear(infoAlumno1);
alumnos.crear(infoAlumno2);
const listado = alumnos.listado;
const alumno = alumnos.get(1);
console.log(alumno);