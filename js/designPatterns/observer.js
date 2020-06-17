let observer = {
    obtenerOfertas: function(callback){        
        if(typeof callback === 'function'){            
            this.susbcribers[this.susbcribers.length] = callback;
        }
    },
    cancelarOfertas: function(callback){
        for(let i=0; i < this.susbcribers.length; i++){
            if(this.susbcribers[i] === callback){
                delete this.susbcribers[i];
            }
        }
    },
    publicarOferta: function(oferta){        
        for(let i = 0; i < this.susbcribers.length; i++){            
            if(typeof this.susbcribers[i] === 'function'){                
                this.susbcribers[i](oferta);
            }
        }

    },
    crear: function(objeto) {
        for(let i in this){
            if(this.hasOwnProperty(i)){
                objeto[i] = this[i];
                objeto.susbcribers = [];
            }
        }
    }
}

//vendedores
const udemy = {
    nuevoCurso: function(){
        const curso = 'Nuevo curso de Udemy';
        this.publicarOferta(curso);
    }
}
const mercadoLibre = {
    nuevoAnuncio: function(){
        const anuncio = 'Nuevo celular';
        this.publicarOferta(anuncio);
    }
}

//crear publicadores
observer.crear(udemy);
observer.crear(mercadoLibre);

//Crear compradores
const juan = {
    compartir: function(oferta){
        console.log('Juan: Excelente oferta!'+oferta);
    }
};
const karen = {
    interesa: function(oferta){
        console.log('Karen: Me interesa la oferta: '+oferta);
    }
}

udemy.obtenerOfertas(juan.compartir);
udemy.obtenerOfertas(karen.interesa);
udemy.nuevoCurso();
udemy.cancelarOfertas(karen.interesa);
udemy.nuevoCurso();
mercadoLibre.obtenerOfertas(juan.compartir);
mercadoLibre.obtenerOfertas(karen.interesa);
mercadoLibre.nuevoAnuncio();