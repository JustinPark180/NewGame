import { Component, OnInit } from '@angular/core';
import Two from '../assets/two.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void{
    let elem = document.getElementById('draw-shapes');
    let parmas = {fullscreen: true};
    let two = new Two(parmas).appendTo(elem);
    let x = 72;
    let y = 72;

    let circle=two.makeCircle(72, 100, 50);
    circle.fill = "#FF8000";
    let rect = two.makeRectangle(700, 100, 100, 100);
    rect.fill= "#FF30FF";
    let circle2=two.makeCircle(700, 100, 50);
    let rect2=two.makeCircle(900, 100, 75);
    let circle3=two.makeCircle(500, 150, 50);
    
    let ellipse = two.makeEllipse(100,200,20,40);
    let star = two.makeStar(20, 40, 10, 60, 5);

    two.bind('update', (framesPerSecond)=>{
      circle.translation.set(x,y);
      x=x+10;
      y=y+2;

    }).play();

  }

  
  title = 'NewGame';

  }