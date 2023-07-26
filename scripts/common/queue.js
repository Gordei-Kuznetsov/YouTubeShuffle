import { Storage } from './storage.js';
import { QueueVideo } from './queueVideo.js';

export class Queue{
    constructor(videos, currentIndex = 0){
        this.list = videos;
        this.currentIndex = currentIndex;
    }

    static dataKey = "QUEUE";

    get Length(){
        return this.list.length;
    }

    Add(playlistIndex, Url){
        video = new QueueVideo(playlistIndex, Url);
        this.list.push(video);
    }

    GoToNext(){
        if (this.Length == 0){
            throw "No videos in queue, can't get next video."
        }
        if (this.currentIndex == this.Length - 1){
            throw "Already on the last video, can't get next video."
        }
        this.currentIndex++;
        return this.list[this.currentIndex];
    }

    GoToPrevious(){
        if (this.Length == 0){
            throw "No videos in queue, can't get previous video."
        }
        if (this.currentIndex == 0){
            throw "Already on the first video, can't get previous video."
        }
        this.currentIndex--;
        return this.list[this.currentIndex];
    }

    static Retrieve(){
        return Storage.get(this.dataKey);
    }
  
    Save(){
        return Storage.set(this.dataKey, this);
    }
}
