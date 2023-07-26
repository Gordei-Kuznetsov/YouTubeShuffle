import { Events } from './events.js';
import { States } from './states.js';
import { Playlist } from './playlist.js';
import { Queue } from './queue.js';


class Main {
    constructor(){
        
    }

    setupPlaylistPage(){
        
        /*
        states = {}
        add event to shuffle button
            toggle isShuffleOn
            if isShuffleOn
                playlist = 12345
                playlist = []
                SelectNextRandomVideo
                saveChanges
                PlayLast
        if miniplayer && isShuffleOn
            add event to next button
                if queueIndex = last
                    SelectNextRandomVideo
                    saveChanges
                    PlayLast
                else
                    PlayNext
            add event to prev button
                PlayPrevious
        */
    }

    setupWatchPage(){
        /*
        add event to shuffle button
            get playlist id
            get playlist data
            save playlist data in storage & code
            get queue
            add current to queue if new video (not a previous)
        add event to next and prev buttons
            next button
                play random video
            prev button
                get queue
                play previous video
        */
    }

    setupGeneralPage(){
        /*
        states = {}
        if miniplayer && isShuffleOn
            add event to next button
                if queueIndex = last
                    SelectNextRandomVideo
                    saveChanges
                    PlayLast
                else
                    PlayNext
            add event to prev button
                PlayPrevious
        */
    }
}

export default new Main();