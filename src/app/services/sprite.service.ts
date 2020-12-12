import { Injectable } from '@angular/core';

export interface Sprite {
  name: string;
  visibility: boolean;
  state: number; //0 = moving or 1 =stationary
  direction: string; //right, left, up, down (where the sprite is facing)
  maxSpeed: number;
  acceleration: number;
  size: number;
  playable: boolean;
  
  url: string;
  fps: number; //frame per sec.
  x: number; //horizontal coordinate
  y:number; //verticle coordinate

  rows: number; // how many rows in your sprite sheet
  columns : number; // how many colums in your sprite sheet

}

@Injectable({
  providedIn: 'root'
})
export class SpriteService {
  sprites:Sprite[]=[
    {
      name: 'sprite',
      visibility: true,
    state: 0,
    direction: 'left',
    maxSpeed: 15,
    acceleration: 1,
    size: 1,
    playable: true,
    url: 'src\assets\sprites\stand0_1.png',
    fps: 7,
    x: 400,
    y:300,
    rows: 1,
    columns : 2,
    }
  ];

  constructor() { }
}
