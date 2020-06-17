//Composicion
const obtenerNombre= (info) => ({
    mostrarNombre(){
        console.log(`Nombre ${info.nombre}`);
    }  
});

function Cliente(nombre, email, empresa){
    let info ={
        nombre,
        email,
        empresa
    }
    return Object.assign(info, obtenerNombre(info));
}

function Empleado(nombre, cargo){
    let info = {
        nombre,
        cargo
    }
    return Object.assign(info, obtenerNombre(info));
}

const cliente1 = new Cliente('Karen');
const empleado1 = new Empleado('Juan');

cliente1.mostrarNombre();
empleado1.mostrarNombre();