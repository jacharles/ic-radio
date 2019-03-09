import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

const NAV_BAR_HEIGHT : number = 80;

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  public element: ElementRef;

  public height: number;
  public width: number;

  constructor(element: ElementRef) {
    this.element = element;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.height = window.innerHeight-NAV_BAR_HEIGHT;
  }

  @HostListener('window:scroll', ['$event'])
  onscroll(event){
    if (window.scrollY > this.height + NAV_BAR_HEIGHT){
      this.width = 50;
      console.log("switching perspective to 50%");
    }
    else {
      this.width = 100;
      console.log("switching perspective to 100%");
    }
  }

  ngOnInit() {
    this.height = window.innerHeight-NAV_BAR_HEIGHT;
    this.width = 100;
  }

  // TODO: figure out window sizing
  // - entire video should show in the window regardless of aspect ratio

}
