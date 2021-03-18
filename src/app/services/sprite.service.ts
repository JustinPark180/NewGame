import { Injectable } from '@angular/core';

export interface Sprite {
  scale: number;
  name: string;
  visibility: boolean;
  state: number; //0 = moving or 1 =stationary
  type: string;
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
    scale: 1,
    name: 'sprite',
    visibility: true,
    state: 0,
    direction: 'left',
    lastDirection: 'left',
    maxSpeed: 15,
    acceleration: 1,
    size: 1,
    playable: true,
    type: 'self',
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


cake:Sprite=
{
  scale: 0.6,
  name: 'cake',
  visibility: true,
  state: 0,
  type: 'prey',
  direction: 'left',
  lastDirection: 'left',
  maxSpeed: 15,
  acceleration: 1,
  size: 0.3,
  playable: true,
  url: '../assets/sprites/fly_11.png',
  fps: 7,
  x: 400,
  y:300,
  rows: 2,
  columns: 2,
  sprite: null,
  leftFrames: [0,1],
  rightFrames: [2,3]
};

tree:Sprite=
{
  scale: 1,
  name: 'tree',
  visibility: true,
  state: 0,
  type: 'object',
  direction: 'left',
  lastDirection: 'left',
  maxSpeed: 0,
  acceleration: 0,
  size: 1,
  playable: false,
  url: '../assets/sprites/tree.png',
  fps: 7,
  x: 400,
  y:300,
  rows: 2,
  columns: 2,
  sprite: null,
  leftFrames: [0,1],
  rightFrames: [2,3]
};

dragon:Sprite=
{
  scale: 1.5,
  name: 'dragon',
  visibility: true,
  state: 0,
  type: 'enemy',
  direction: 'left',
  lastDirection: 'left',
  maxSpeed: 15,
  acceleration: 1,
  size: 0.3,
  playable: true,
  url: '../assets/sprites/dragon.png',
  fps: 7,
  x: 400,
  y:300,
  rows: 4,
  columns: 2,
  sprite: null,
  leftFrames: [0,3],
  rightFrames: [4,7]
};


populateCake(numberToPopulate: number) {
  for (let i=0; i<numberToPopulate; i++) {
    let cake = this.cake;
    cake.x = Math.floor(Math.random() * 500* i);
    cake.y = Math.floor(Math.random() * 100* i);
    
    this.sprites.push(JSON.parse(JSON.stringify(cake)));

  }
}

  populateTree(numberToPopulate: number) {
    for (let i=0; i<numberToPopulate; i++) {
      let tree = this.tree;
      tree.x = Math.floor(Math.random() * 500* i);
      tree.y = Math.floor(Math.random() * 100* i);
      
      this.sprites.push(JSON.parse(JSON.stringify(tree)));
  
    }
}
populateDragon(numberToPopulate: number) {
  for (let i=0; i<numberToPopulate; i++) {
    let dragon = this.dragon;
    dragon.x = Math.floor(Math.random() * 500* i);
    dragon.y = Math.floor(Math.random() * 100* i);
    
    this.sprites.push(JSON.parse(JSON.stringify(dragon)));

  }
}

  constructor() { }
}

