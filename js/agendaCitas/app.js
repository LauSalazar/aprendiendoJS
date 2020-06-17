let DB;
//Selectores de la interfaz
const form = document.querySelector('form'),
    nombreMascota = document.querySelector('#mascota'),
    cliente = document.querySelector('#cliente'),
    telefono = document.querySelector('#telefono'),
    fecha = document.querySelector('#fecha'),
    hora = document.querySelector('#hora'),
    sintomas = document.querySelector('#sintomas'),
    citas = document.querySelector('#citas'),
    headingAdmin = document.querySelector('#administra');

document.addEventListener('DOMContentLoaded', () =>{
    let crearDB = window.indexedDB.open('citas',1);
    crearDB.onerror = function(){
        console.log('Hubo un error');
    }
    crearDB.onsuccess = function(){
        DB = crearDB.result;
        mostrarCitas();
    }
    //Solo corre una vez
    crearDB.onupgradeneeded = function(e){
        let db = e.target.result;
        //ObjectStore
        let objectStore = db.createObjectStore('citas', {keyPath: 'key', autoIncrement: true});
        objectStore.createIndex('mascota','mascota', {unique: false});        
        objectStore.createIndex('cliente','cliente', {unique: false});
        objectStore.createIndex('telefono','telefono', {unique: false});
        objectStore.createIndex('fecha','fecha', {unique: false});
        objectStore.createIndex('hora','hora', {unique: false});
        objectStore.createIndex('sintomas','sintomas', {unique: false});
    }

    form.addEventListener('submit', agregarDatos);
    function agregarDatos(e) {
        e.preventDefault();
        const nuevaCita = {
            mascota: nombreMascota.value,
            cliente: cliente.value,
            telefono: telefono.value,
            fecha: fecha.value,
            hora: hora.value,
            sintomas: sintomas.value
        }
        let transaction = DB.transaction(['citas'],'readwrite');
        let objectStore = transaction.objectStore('citas');
        
        
        let peticion = objectStore.add(nuevaCita);
        
        peticion.onsuccess = () => {
            form.reset();
        }
        transaction.oncomplete = () => {
            console.log('Cita agregada');
            mostrarCitas();
            
        }
        transaction.onerror = () => {
            console.log('Hubo un error');
            
        }
    }

    function mostrarCitas(){
        while(citas.firstChild){
            citas.removeChild(citas.firstChild);
        }

        let objectStore = DB.transaction('citas').objectStore('citas');
        objectStore.openCursor().onsuccess = function(e){
        let cursor = e.target.result;

        if(cursor){
            let citaHTML = document.createElement('li');
            
            citaHTML.setAttribute('data-cita-id', cursor.value.key);
            citaHTML.classList.add('list-group-item');
            
            citaHTML.innerHTML = `
                <p class= "font-weigth-bold">Mascota: ${cursor.value.mascota}</p> 
                <p class= "font-weigth-bold">Cliente: ${cursor.value.cliente}</p> 
                <p class= "font-weigth-bold">Fecha: ${cursor.value.fecha}</p> 
                <p class= "font-weigth-bold">Hora: ${cursor.value.hora}</p>
                <p class= "font-weigth-bold">Sintomas: ${cursor.value.sintomas}</p>  
            `;
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger');
            btnBorrar.innerHTML = '<p>Borrar</p>';
            btnBorrar.onclick = borrarCita;
            citaHTML.appendChild(btnBorrar);

            citas.appendChild(citaHTML);                
            cursor.continue();
        } else {
            if(!citas.firstChild){
                headingAdmin.textContent = 'Agrega citas';
                let listado = document.createElement('p');
                listado.classList.add('text-center');
                listado.textContent = 'No hay registros';
            } else {
                headingAdmin.textContent = 'Administra tus citas';
            }
            
            }
        }
    }
    function borrarCita(e){
        let citaId = Number(e.target.parentElement.parentElement.getAttribute('data-cita-id'));
        let transaction = DB.transaction(['citas'],'readwrite');
        let objectStore = transaction.objectStore('citas');
        let peticion = objectStore.delete(citaId);
        
        

        transaction.oncomplete = () => {
            
            e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement);
            console.log('Se ha eliminado correctamente '+ citaId);
            if(!citas.firstChild){
                headingAdmin.textContent = 'Agrega citas';
                let listado = document.createElement('p');
                listado.classList.add('text-center');
                listado.textContent = 'No hay registros';
            } else {
                headingAdmin.textContent = 'Administra tus citas';
            }
        }

    

        
    }
})