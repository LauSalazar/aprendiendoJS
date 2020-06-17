class UI {
    constructor() {
        this.api = new API();

        //crear los markers
        this.markers = new L.LayerGroup();

         // Iniciar el mapa
         this.mapa = this.inicializarMapa();

    }

    inicializarMapa() {
         // Inicializar y obtener la propiedad del mapa
         const map = L.map('mapa').setView([6.259919, -75.586519], 6);
         const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + enlaceMapa + ' Contributors',
             maxZoom: 18,
             }).addTo(map);
         return map;

    }

    mostrarPuntosMapa(){
        this.api.obtenerDatos().then(datos => {
            const resultados = datos.datosJSON.features;
            this.mostrarPines(resultados);

        });

    }

    mostrarPines(datos){
        //se limpia los markers
        this.markers.clearLayers();
        datos.forEach(dato => {
            const {geometry :{coordinates}, properties:{control, description}} = dato;
            
            const opcionesPopUp = L.popup().setContent(description);
                
            
            const marker = new L.marker([
                parseFloat(coordinates[1]),
                parseFloat(coordinates[0])
            ]).bindPopup(opcionesPopUp);
            this.markers.addLayer(marker);

        });
        this.markers.addTo(this.mapa);
    }

    obtenerSugerencias(busqueda){
        this.api.obtenerDatos().then(datos =>{            
            const resultados = datos.datosJSON.features;
            console.log(resultados);
            
            this.filtrarSugerencias(resultados, busqueda);
        })

    }

    filtrarSugerencias(resultado, busqueda){
        const filtro = resultado.filter(filtro => filtro.properties.description.indexOf(busqueda) !== -1);
        console.log(filtro);
        this.mostrarPines(filtro);
        
    }
}