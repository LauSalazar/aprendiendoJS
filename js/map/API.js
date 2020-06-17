class API {
    async obtenerDatos(){
        const datos = await fetch('https://tupale.co/milfs/geojson.php?id=42');
        const datosJSON = await datos.json();
        return {
            datosJSON
        }
    }
}