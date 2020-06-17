const edades = [10, 20, 30, [15, 25, [45, 84, 90]]];
//console.log(edades.flat(Infinity));

const productos = [
    {nombre: 'producto 1', precio: 50},
    {nombre: 'producto 2', precio: 40}
]

const resultado = productos.flatMap(producto => [producto.nombre, producto.precio]);
//console.log(resultado);

const map = new Map([
    ['nombre','Producto 1'],
    ['precio', '50']
]);
const objetoMap = Object.fromEntries(map);
delete objetoMap.precio;
//console.log(objetoMap);

const nombre = '     Laura     ';
//console.log(nombre.trimStart().trimEnd());

function Automovil(modelo, color){
    this.modelo = modelo;
    this.color = color;
}
Automovil.prototype.toString = function autoString(){
    const datos = `Auto: ${this.modelo} y color ${this.color}`;
    return datos;
}
const auto = new Automovil('Camaro', 'negro');
console.log(auto.toString());

