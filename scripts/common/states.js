import { Storage } from './storage.js';

export class States {
    constructor(playlistId, isPageLoadedByTheExtention, isShuffleOn) {
      this.playlistId = playlistId;
      this.isPageLoadedByTheExtention = isPageLoadedByTheExtention;
      this.isShuffleOn = isShuffleOn;
    }

    static dataKey = "STATES";

    static WatchPage = "WATCH_PAGE";
    static PlaylistPage = "PLAYLIST_PAGE";
    static GeneralPage = "GENERAL_PAGE";

    static CurrentPage(){
      var scripts = chrome.runtime.getManifest().content_scripts;

      var watchRegExp = new RegExp(scripts.filter(script => script.name == this.WatchPage)[0].matches[0]);
      var playlistRegExp = new RegExp(scripts.filter(script => script.name == this.PlaylistPage)[0].matches[0]);
      var generalRegExp = new RegExp(scripts.filter(script => script.name == this.GeneralPage)[0].matches[0]);
      var url = window.location.href;

      if (watchRegExp.test(url)){
        return this.WatchPage;
      }
      else if (playlistRegExp.test(url)){
        return this.PlaylistPage;
      }
      else if (generalRegExp.test(url)){
        return this.generalRegExp;
      }
      else{
        throw `Invalid current url: ${url}`;
      }
    }

    static getPlaylistId(){
      var url = window.location.href;
      var currentPage = this.CurrentPage();

      if (currentPage == this.WatchPage || currentPage == this.PlaylistPage){
        var regExp = new RegExp("https://www.youtube.com/*?*list=([a-zA-Z0-9]{34})*");
        var match = regExp.match(url);
        return match[0];
      }
      else{
        throw "Can't get the playlist id from a general page."
      }
    }

    static Retrieve(){
      return Storage.get(this.dataKey);
    }

    Save(){
      return Storage.set(this.dataKey, this);
    }
}
