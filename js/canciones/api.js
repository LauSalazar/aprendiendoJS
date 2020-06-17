export class API{
    constructor(artist, song){
        this.artist = artist;
        this.song = song;
    }
    async searchSong(){
        const call = await fetch(`https://api.lyrics.ovh/v1/${this.artist}/${this.song}`);
        const resp = await call.json();
        return {
            resp
        }
    }
}