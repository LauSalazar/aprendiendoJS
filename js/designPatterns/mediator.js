const Vendedor = function(nombre){
    this.nombre = nombre;
    this.sala = null;
}
const Comprador = function(nombre){
    this.nombre = nombre;
    this.sala = null;
}
Vendedor.prototype = {
    oferta: function(articulo, precio){
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciando en ${precio}`);        
    },
    vendido: function(comprador){
        console.log(`Vendido a ${comprador}...`);
    }
}
Comprador.prototype = {
    oferta: function(mensaje, comprador){
        console.log(`${comprador.nombre}:${mensaje}`);
        
    }
}
const Subasta = function(){
    let compradores = {};

    return {
        registrar: function(usuario){
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
            console.log(compradores);
            
        }
    }
}

const juan = new Comprador('Juan');
const laura = new Comprador('Laura');
const karen = new Comprador('Karen');

const vendedor = new Vendedor('Vendedor');
const subasta = new Subasta();
subasta.registrar(juan);
subasta.registrar(laura);
subasta.registrar(karen);

vendedor.oferta('PC',5000);
juan.oferta(6000,juan);
karen.oferta(7000,karen);
vendedor.vendido(karen.nombre);

