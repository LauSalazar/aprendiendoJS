// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

function obtenerAutos() {
    return [
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2012,
            precio: 30000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2015,
            precio: 20000,
            puertas: 2,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2016,
            precio: 70000,
            puertas: 4,
            color: 'Rojo',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2015,
            precio: 25000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Chevrolet',
            modelo: 'Camaro',
            year: 2018,
            precio: 60000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2017,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2012,
            precio: 25000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 45000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2019,
            precio: 90000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2015,
            precio: 35000,
            puertas: 2,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2018,
            precio: 50000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2017,
            precio: 80000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
    ];
}

const autos = obtenerAutos();
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos(autos);
});

function limpiarHTML(){
    let contenedor = document.querySelector('#resultado');
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}

function mostrarAutos(autos){
    let contenedor = document.querySelector('#resultado');
    limpiarHTML();
    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `${auto.marca} ${auto.modelo} ${auto.puertas} Puertas Año: ${auto.year} Precio: ${auto.precio} 
        Transmisión:${auto.transmision} Color:${auto.color}` ;
        contenedor.appendChild(autoHTML);
    });
}

let objBusqueda = {    
    marca: '',
    modelo: '',
    year: '',
    precio: '',
    puertas: '',
    color: '',
    transmision: '',
    minimo: '',
    maximo: ''
};

//Event listeners
const marca = document.querySelector('#marca');
marca.addEventListener('input', e => {
    objBusqueda.marca = e.target.value;
    filtrarAuto();
} );
const year = document.querySelector('#year');
year.addEventListener('input', e => {
    objBusqueda.year = Number(e.target.value);
    filtrarAuto();
} );
const minimo = document.querySelector('#minimo');
minimo.addEventListener('input', e => {
    objBusqueda.minimo = Number(e.target.value);
    filtrarAuto();
} );
const maximo = document.querySelector('#maximo');
maximo.addEventListener('input', e => {
    objBusqueda.maximo = Number(e.target.value);
    filtrarAuto();
} );
const puertas = document.querySelector('#puertas');
puertas.addEventListener('input', e => {
    objBusqueda.puertas = Number(e.target.value);
    filtrarAuto();
} );
const transmision = document.querySelector('#transmision');
transmision.addEventListener('input', e => {
    objBusqueda.transmision = e.target.value;
    filtrarAuto();
} );
const color = document.querySelector('#color');
color.addEventListener('input', e => {
    objBusqueda.color = e.target.value;
    filtrarAuto();
} );

function sinResultado(){
    limpiarHTML();
    const sinResultado = document.createElement('div');
    sinResultado.classList.add('alerta', 'error');
    sinResultado.appendChild(document.createTextNode('No se encontraron resultados'));
    document.querySelector('#resultado').appendChild(sinResultado);
}

function filtrarAuto(){
    let resultado = obtenerAutos().filter(obtenerPorMarca).filter(obtenerPorYear)
    .filter(filtrarMinimo).filter(filtrarMaximo).filter(obtenerPorPuertas).filter(obtenerPorTransmision)
    .filter(filtrarColor);
    if(resultado.length){
        mostrarAutos(resultado);
    } else {
        sinResultado();
    }
    
}

function obtenerPorMarca(auto){
    if(objBusqueda.marca){
        return objBusqueda.marca === auto.marca;
    } else {
        return auto;
    }
}
function obtenerPorYear(auto){
    if(objBusqueda.year){
        return objBusqueda.year === auto.year;
    } else {
        return auto;
    }
}
function filtrarMinimo(auto){
    if(objBusqueda.minimo){
        return auto.precio >= objBusqueda.minimo;
    } else {
        return auto;
    }
}
function filtrarMaximo(auto){
    if(objBusqueda.maximo){
        return auto.precio <= objBusqueda.maximo;
    } else {
        return auto;
    }
}
function obtenerPorPuertas(auto){
    if(objBusqueda.puertas){
        return objBusqueda.puertas === auto.puertas;
    } else {
        return auto;
    }
}
function obtenerPorTransmision(auto){
    if(objBusqueda.transmision){
        return objBusqueda.transmision === auto.transmision;
    } else {
        return auto;
    }
}
function filtrarColor(auto){
    if(objBusqueda.color){
        return objBusqueda.color === auto.color;
    } else {
        return auto;
    }
}
