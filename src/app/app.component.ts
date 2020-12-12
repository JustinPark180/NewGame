import { Component, HostListener, OnInit } from '@angular/core';
import Two from '../assets/two.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  x: number=200;
  y: number=200;

  ngOnInit(): void{
    let elem = document.getElementById('draw-shapes');
    let parmas = {fullscreen: true};
    let two = new Two(parmas).appendTo(elem);
    
  

  var sheet = two.makeSprite('../assets/sprites/stand0_1.png', 
    400, 300, 2, 1, 150);
    sheet.play();

    two.bind('update', (framesPerSecond)=>{
    sheet.translation.x=this.x;

    }).play();

  }

  @HostListener('document:keydown', ['$event'])
  handleKey(event: KeyboardEvent) {
    if (event.key=='ArrowRight') {
      this.x=this.x+15;
    }
    else if (event.key=='ArrowLeft') {
      this.x=this.x-15;
    }
  }

  title = 'NewGame';
  }