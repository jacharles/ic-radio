import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {ScheduleComponent} from './schedule/schedule.component';
import {AboutComponent} from './about/about.component';
import {VideoComponent} from './video/video.component';
import {FooterComponent} from './footer/footer.component';

import {ApiModule, BASE_PATH} from '../generated';
import {HttpClientModule} from '@angular/common/http';
import {LatestStreamService} from './services/latest-stream.service';
import {SafePipe} from './safepipe';
import { FlexLayoutModule } from '@angular/flex-layout';



export function loadLatestStreamService(latestStreamService: LatestStreamService): Function {
    return () => latestStreamService.load();
}

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        ScheduleComponent,
        VideoComponent,
        FooterComponent,
        SafePipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        ApiModule,
        HttpClientModule,
        FlexLayoutModule
    ],
    providers: [
        {provide: BASE_PATH, useValue: 'https://www.invisiblecityradio.com'},
        LatestStreamService,
        {provide: APP_INITIALIZER, useFactory: loadLatestStreamService, deps: [LatestStreamService], multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
