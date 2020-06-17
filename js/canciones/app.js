import { API } from './api.js';
import * as UI from './interfaz.js';

UI.formSearch.addEventListener('submit', (e) => {
    e.preventDefault();

    const artist = document.querySelector('#artista').value,
        song = document.querySelector('#cancion').value;

    if (artist === '' || song === ''){
        UI.divMsg.innerHTML = 'Los campos son obligatorios';
        UI.divMsg.classList.add('error');
        setTimeout(() => {
            UI.divMsg.innerHTML = '';
            UI.divMsg.classList.remove('error');

        }, 3000);
    } else {
        const api = new API(artist, song);
        api.searchSong().then(data => {
            if(data.resp.lyrics){
                UI.divResult.textContent = data.resp.lyrics;

            } else {
                UI.divMsg.innerHTML = 'No se encontraron resultados';
                UI.divMsg.classList.add('error');
                setTimeout(() => {
                    UI.divMsg.innerHTML = '';
                    UI.divMsg.classList.remove('error');
                    UI.formSearch.reset();

        }, 3000);

            }
            
        });
    }
});