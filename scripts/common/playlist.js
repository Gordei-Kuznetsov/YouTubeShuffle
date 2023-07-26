import { Storage } from './storage.js';

export class Playlist{
    constructor(Urls){
        this.Urls = Urls;
    }

    static dataKey = "PLAYLIST";

    static Retrieve(){
        return Storage.get(this.dataKey);
    }

    Save(){
        return Storage.set(this.dataKey, this);
    }
}
