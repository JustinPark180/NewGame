import { Component, HostListener, OnInit } from '@angular/core';
import Two from '../assets/two.min.js';
import { SpriteService } from './services/sprite.service.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  x: number=200;
  y: number=200;
  constructor(private _spriteService: SpriteService) {}

  
  
  ngOnInit(): void{
    let elem = document.getElementById('draw-shapes');
    let parmas = {fullscreen: true};
    let two = new Two(parmas).appendTo(elem);


    
    for (let i=0; i<this._spriteService.sprites.length; i++) {
      let sprite=this._spriteService.sprites[i];
      this._spriteService.sprites[i].sprite=two.makeSprite(sprite.url, sprite.x, sprite.y, sprite.columns, sprite.rows, sprite.fps);
      this._spriteService.sprites[i].sprite.play();

    }


    two.bind('update', (framesPerSecond)=>{
    this._spriteService.sprites[0].sprite.translation.x=this.x;
    this._spriteService.sprites[0].sprite.translation.y=this.y;

    for (let i=0; i<this._spriteService.sprites.length; i++) {
      if (this._spriteService.sprites[i].direction !=this._spriteService.sprites[i].lastDirection) {
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

  @HostListener('document:keydown', ['$event'])
  handleKey(event: KeyboardEvent) {
    if (event.key=='ArrowRight') {
      this.x=this.x+15;
      this._spriteService.sprites[0].direction='right'
    }
    if (event.key=='ArrowLeft') {
      this.x=this.x-15;
      this._spriteService.sprites[0].direction='left'
    }
    if (event.key=='ArrowUp') {
      this.y=this.y-15;
    }
    if (event.key=='ArrowDown') {
      this.y=this.y+15;
    }
  }

  title = 'NewGame';
  }