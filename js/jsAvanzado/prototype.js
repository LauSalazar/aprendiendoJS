//prototype
function Playlist(nombre){
    this.nombre = nombre;
}
Playlist.prototype.play = function(){
    console.log(`Reproduciendo ${this.nombre}`);
}
Playlist.prototype.eliminar = function(){
    console.log(`Eliminando ${this.nombre}`);
}
//Herencia via prototype
function Cancion(nombre, genero){
    Playlist.call(this, nombre);
    this.genero = genero;
}
//Heredar los metodos
Cancion.prototype = Object.create(Playlist.prototype);
const cancion = new Cancion('Para tu amor','Pop');
const playList = new Playlist('Rocks 90');
cancion.play();
playList.play();
 
 