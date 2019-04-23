import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AboutComponent } from './about/about.component';
import { VideoComponent } from './video/video.component';
import { FooterComponent } from './footer/footer.component';

import { ApiModule } from '../generated';
import { HttpClientModule } from '@angular/common/http';

import { BASE_PATH } from '../generated';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    AboutComponent,
    ScheduleComponent,
    VideoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
      ApiModule,
      HttpClientModule
  ],
  providers: [{provide: BASE_PATH, useValue: 'http://localhost:8081'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
