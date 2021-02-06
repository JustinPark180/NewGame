import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  MAX_X: number = 3500;
  MAX_Y: number = 1000;

constructor() { }

init(two: any) {


  let grass= two.makeRectangle(0, 0, 8000, 3000);
  grass.fill = 'green';
  grass.opacity=.7;
  
  
  }
}
