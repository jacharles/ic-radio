export * from './basicErrorController.service';
import { BasicErrorControllerService } from './basicErrorController.service';
export * from './latestStreamController.service';
import { LatestStreamControllerService } from './latestStreamController.service';
export const APIS = [BasicErrorControllerService, LatestStreamControllerService];
