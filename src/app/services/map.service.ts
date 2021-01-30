import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  MAX_X: number = 3500;
  MAX_Y: number = 1000;

constructor() { }

init(two: any) {


  let grass= two.makeRectangle(0, 0, 8000, 1400);
  grass.fill = 'green';
  grass.opacity=.7;
  let soil = two.makeRectangle(0, 1000, 7000, 700);
  soil.fill = '#880055'
  
  }
}
