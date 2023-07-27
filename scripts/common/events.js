import { States } from './states.js';

export class Events{
    static onNext(func){
        currentPage = States.CurrentPage();
        if (currentPage == States.WatchPage){
            // on watch page next button click
            document.getElementsByClassName("ytp-chrome-bottom ytp-next-button ytp-button")[0].onclick(func);
            // on current video end
            onRequest((url) => {
                if (url.startsWith("https://www.youtube.com/youtubei/v1/next?key=")){
                    func();
                }
            });
            // add handler to general next event (like chrome in-built player thingy)
        }
        else if (this.isMiniplayerPresent()){
            // on miniplayer next button click
            document.getElementsByClassName("ytp-miniplayer-ui ytp-next-button ytp-button")[0].onclick(func);
        }
    }

    static onPrevious(func){
        currentPage = States.CurrentPage();
        if (currentPage == States.WatchPage){
            // on watch page previous button click
            document.getElementsByClassName("ytp-chrome-bottom ytp-prev-button ytp-button")[0].onclick(func);
            // add handler to general previous event (like chrome in-built player thingy)
        }
        else if (this.isMiniplayerPresent()){
            // on miniplayer previous button click
            document.getElementsByClassName("ytp-miniplayer-ui ytp-prev-button ytp-button")[0].onclick(func);
        }
    }

    static onShuffle(func){
        currentPage = States.CurrentPage();
        if (currentPage == States.WatchPage){
            // on watch page shuffle button click
            document.querySelectorAll('[aria-label="Shuffle playlist"]')[0].onclick(func);
        }
        else if (currentPage == States.PlaylistPage){
            // on playlist page shuffle button click
            document.getElementsByClassName("shuffle-button")[0].onclick(func);
        }
    }

    static isMiniplayerPresent(){
        return document.getElementsByTagName("ytd-miniplayer[active]")[0] != null;
    }

    static onRequest(func){
        var originalOpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function(method, url) {
            func(url);
            originalOpen.apply(this, arguments);
        };
    }
}
