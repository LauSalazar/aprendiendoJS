const restApp = {};
restApp.platillos = [
    {
        platillo: 'Pizza'
    },
    {
        platillo: 'Lasagna'
    }
];
restApp.funciones = {
    ordenar: id => {
        console.log(`Tu platillo ${restApp.platillos[id].platillo} se está preparando`);
    },
    agregarPlatillo: (platillo) => {
        const nuevoPlatillo = {
            platillo
        }
        restApp.platillos.push(nuevoPlatillo);
    },
    mostrarMenu: () => {
        console.log('Bienvenidos');
        restApp.platillos.forEach((platillo, index) => {
            console.log(`Plato fuerte ${index} ${platillo.platillo}`);
            
        });
        
    }
}


restApp.funciones.agregarPlatillo('Pastas');
restApp.funciones.mostrarMenu();
restApp.funciones.ordenar(1);