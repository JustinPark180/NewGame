import { Injectable } from '@angular/core';

export interface Sprite {
  name: string;
  visibility: boolean;
  state: number; //0 = moving or 1 =stationary
  direction: string; //right, left, up, down (where the sprite is facing)
  lastDirection: string;
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

  sprite: any;

  leftFrames: number[];
  rightFrames: number[];
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
    lastDirection: 'left',
    maxSpeed: 15,
    acceleration: 1,
    size: 1,
    playable: true,
    url: '../assets/sprites/4 stand.png',
    fps: 7,
    x: 400,
    y:300,
    rows: 2,
    columns: 2,
    sprite: null,
    leftFrames: [0,1],
    rightFrames: [2,3]
  }
  ];

  constructor() { }
}
