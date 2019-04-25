import { Injectable } from '@angular/core';
import {LatestStreamControllerService} from '../../generated';

@Injectable({
  providedIn: 'root',
})
export class LatestStreamService {

  public channelId: string;
  public streamId: string;

  constructor(private readonly latestStreamControllerService: LatestStreamControllerService) { }

  public load() {
    this.latestStreamControllerService.getLatestStreamUsingGET().toPromise().then(latestStream => {
      this.channelId = latestStream.channelId;
      this.streamId = latestStream.streamId;
    });
  }
}
