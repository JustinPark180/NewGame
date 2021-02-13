import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import Two from '../assets/two.min.js';
import { AiService } from './services/ai.service.js';
import { CameraService } from './services/camera.service.js';
import { CollisionService } from './services/collision.service.js';
import { MapService } from './services/map.service.js';
import { Sprite, SpriteService } from './services/sprite.service.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  direction:string;
  
  x: number=200;
  y: number=200;

  max_x: number= 3500;
  max_y: number= 2500;


  constructor(private _spriteService: SpriteService, private _cameraService: CameraService, private _mapService: MapService, private _aiservice: AiService, private _collisionService: CollisionService) {}

  @HostListener('document:keydown', ['$event'])
  handleKey(event: any) {
    if (event.key=='ArrowRight') {
      this.x=this.x+10;
      this._spriteService.sprites[0].direction='right'
    }
    else if (event.key=='ArrowLeft') {
      this.x=this.x-10;
      this._spriteService.sprites[0].direction='left';
    }
    else if (event.key =='ArrowUp') {
      this.y=this.y-10;
    }
    else if (event.key=='ArrowDown') {
      this.y=this.y+10;
    }
    event.preventDefault();
  }

  ngOnInit(): void {
    let elem = document.getElementById('map');
    let params = {
      width: this._mapService.MAX_X,
      height: this._mapService.MAX_Y 
    };
    let two = new Two(params).appendTo(elem);
    
    this._mapService.init(two)
    this._cameraService.init(this.max_x, this.max_y);
    this._spriteService.populateCake(10)
    this._spriteService.populateTree(10)
    //loop through service
    for (let i=this._spriteService.sprites.length-1; i>=0; i--) {
      let sprite=this._spriteService.sprites[i];
      this._spriteService.sprites[i].sprite=two.makeSprite(sprite.url, sprite.x, sprite.y, sprite.columns, sprite.rows, sprite.fps);
      this._spriteService.sprites[i].sprite.play(this._spriteService.sprites[i].rightFrames[0], this._spriteService.sprites[i].rightFrames[1]);
      //this._spriteService.sprites[i].sprite.scale=this._spriteService.sprites[i].scale;
    }
    console.log(this._spriteService.sprites)
    //rectangle.scale=.7;
    two.bind('update', (framesPerSecond)=>{
      // this is where animatoin happens


      if (this.x+70<this.max_x && this.x-70>0) this._spriteService.sprites[0].sprite.translation.x=this.x;
      if (this.y+30<this.max_y && this.y-70>0) this._spriteService.sprites[0].sprite.translation.y=this.y;
      
      this._cameraService.zoomCamera(this.x, this.y);

        for (let i=this._spriteService.sprites.length-1; i>=0; i--) {
          if (i>0) {
            if (!this._spriteService.sprites[i]) continue
            this._spriteService.sprites[i]=this._aiservice.basicAI(this._spriteService.sprites[i]);
            this._spriteService.sprites[i].sprite.translation.x = this._spriteService.sprites[i].x;
            this._spriteService.sprites[i].sprite.translation.y = this._spriteService.sprites[i].y;
            this._spriteService.sprites[i].sprite.scale = this._spriteService[i].scale;
          }
          if (this._spriteService.sprites[i].direction != this._spriteService.sprites[i].lastDirection) {
            this._spriteService.sprites[i].lastDirection=this._spriteService.sprites[i].direction;
            if (this._spriteService.sprites[i].direction=='right') {
              this._spriteService.sprites[i].sprite.play(this._spriteService.sprites[i].rightFrames[0], this._spriteService.sprites[i].rightFrames[1])
            }
            else {
              this._spriteService.sprites[i].sprite.play(this._spriteService.sprites[i].leftFrames[0], this._spriteService.sprites[i].leftFrames[1])
            }
          }
        }
        
    }).play();
  }

  

  

}