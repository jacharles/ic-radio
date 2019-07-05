import {Component, HostListener, OnInit} from '@angular/core';
import {LatestStreamService} from '../services/latest-stream.service';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

    public snapped: boolean;
    public windowHeight: number;
    public channelId: string;
    public streamId: string;
    public embedUrl: string;

    constructor(private readonly latestStreamService: LatestStreamService) {
    }

    @HostListener('window:resize', ['$event'])
    onresize() {
        this.windowHeight = window.innerHeight;
    }

    @HostListener('window:scroll', ['$event'])
    onscroll(event) {
        if (window.scrollY > this.windowHeight && window.innerWidth > 960) {
            this.snapped = true;
        } else {
            this.snapped = false;
        }
    }

    ngOnInit() {
        this.streamId = this.latestStreamService.streamId;
        this.channelId = this.latestStreamService.channelId;
        this.embedUrl = `https://www.youtube.com/embed/live_stream?channel=${this.channelId}`
        this.windowHeight = window.innerHeight;
        this.snapped = false;
    }
}
