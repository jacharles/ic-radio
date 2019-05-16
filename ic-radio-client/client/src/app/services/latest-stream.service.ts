import { Injectable } from '@angular/core';
import {LatestStreamControllerService} from '../../generated';

@Injectable({
  providedIn: 'root',
})
export class LatestStreamService {

  public channelId: string;
  public streamId: string;

  constructor(private readonly latestStreamControllerService: LatestStreamControllerService) { }

  public load(): Promise<any> {
    const promise = new Promise(((resolve, reject) => {
      this.latestStreamControllerService.getLatestStreamUsingGET().subscribe(latestStream => {
        this.channelId = latestStream.channelId;
        this.streamId = latestStream.streamId;
        resolve();
        return latestStream;
      });
    }));
    return promise;
  }
}
