import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  public snapped: boolean;
  public windowHeight: number;

  constructor() {
  }

  @HostListener('window:resize', ['$event'])
  onresize(){
    this.windowHeight = window.innerHeight;
  }

  @HostListener('window:scroll', ['$event'])
  onscroll(event){
    if (window.scrollY > this.windowHeight){
      this.snapped = true;
    }
    else {
      this.snapped = false;
    }
  }

  ngOnInit() {
    this.windowHeight = window.innerHeight;
    this.snapped = false;
  }

  // TODO: use ngclass for dynamic bulk css property updates
  // TODO: change dynamic adjustment to use viewport units

}
