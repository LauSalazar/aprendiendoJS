//This con implicit binding
const persona = {
    nombre: 'Laura',
    edad: 30,
    presentacion() {
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad}`);
        
    }
}
persona.presentacion();

//this con explicit binding
function personaPresentacion (gusto1, gusto2){
    console.log(`Hola soy ${this.nombre} y le gustan los ${gusto1} y ${gusto2}`);
    
}
const info = {
    nombre: 'laura'
}
const gustos = ['Gatos', 'Deportes']

personaPresentacion.call(info, gustos[0], gustos[1]);
personaPresentacion.apply(info, gustos);
const nuevaFuncion = personaPresentacion.bind(info, gustos[0], gustos[1]);
nuevaFuncion();

//this con new binding
function Automovil(nombre, color) {
    this.nombre = nombre;
    this.color = color;
}
const auto = new Automovil('Mi carro', 'azul');
console.log(auto);

//window binding
function obtenerAuto(){
    console.log(`Mi carro es color ${this.color}`);
}
window.color = 'azul';
obtenerAuto();
