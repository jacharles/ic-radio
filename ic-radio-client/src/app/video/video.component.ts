import {Component, HostListener, OnInit} from '@angular/core';
import {LatestStreamControllerService} from '../../generated';

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
    public isStreamInfoAvailable = false;
    public currentlyStreaming = false;

    constructor(private readonly latestStreamControllerService: LatestStreamControllerService) {
    }

    @HostListener('window:resize', ['$event'])
    onresize() {
        this.windowHeight = window.innerHeight;
    }

    @HostListener('window:scroll', ['$event'])
    onscroll(event) {
        if (window.scrollY > this.windowHeight) {
            this.snapped = true;
        } else if (window.scrollY < this.windowHeight) {
            this.snapped = false;
        }
    }

    ngOnInit() {
        this.getLatestStream().then(() => {
            this.isStreamInfoAvailable = true;
            if (this.channelId != null && this.streamId != null){
                this.currentlyStreaming = true;
            }
        });
        this.windowHeight = window.innerHeight;
        this.snapped = false;
    }

    async getLatestStream() {
        await this.latestStreamControllerService.getLatestStreamUsingGET().toPromise().then(response => {
            this.channelId = response.channelId;
            this.streamId = response.streamId;
        });
    }

}
