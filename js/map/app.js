const ui = new UI();
document.addEventListener('DOMContentLoaded', ()=>{
    ui.mostrarPuntosMapa();
});

//buscador
const buscador = document.querySelector('#buscar input');
buscador.addEventListener('input', ()=>{
    console.log('escribiendo');
    if(buscador.value.length > 5){
        ui.obtenerSugerencias(buscador.value);
    } else {
        ui.mostrarPuntosMapa();
    }
    
})