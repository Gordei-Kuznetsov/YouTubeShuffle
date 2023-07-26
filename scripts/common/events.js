import { States } from './states.js';

export class Events{
    static onNext(func){
        currentPage = States.CurrentPage();
        if (currentPage == States.WatchPage){
            /* add handler to:
                - the next button click
                - leaving the page after video finishes
                -- general next event (like chrome in-built player thingy)
            */
        }
        else if (this.isMiniplayerPresent()){
            /* add handler to:
                - the miniplayer next button click
            */
        }
    }

    static onPrevious(func){
        currentPage = States.CurrentPage();
        if (currentPage == States.WatchPage){
            /* add handler to:
                - the previous button click
                -- general previous event (like chrome in-built player thingy)
            */
        }
        else if (this.isMiniplayerPresent()){
            /* add handler to:
                - the miniplayer previous button click
            */
        }
    }

    static onShuffle(func){
        currentPage = States.CurrentPage();
        if (currentPage == States.WatchPage){
            /* 
                Toggle shuffling ...
            */
        }
        else if (currentPage == States.PlaylistPage){
            /*
                Toggle shuffling ...
            */
        }
    }

    static isMiniplayerPresent(){
        // check if miniplayer exists 
    }
}


/*
Playlist page
let shuffleButton = document.getElementsByClassName("shuffle-button")
let nextButton = document.getElementsByClassName("ytp-next-button ytp-button")
let prevButton = document.getElementsByClassName("ytp-prev-button ytp-button")
let miniplayer = document.getElementsByTagName("ytd-miniplayer")


Watch page
let shuffleButton = document.querySelectorAll('[aria-label="Shuffle playlist"]')
let nextButton = document.getElementsByClassName("ytp-next-button ytp-button")
let prevButton = document.getElementsByClassName("ytp-prev-button ytp-button")
*/