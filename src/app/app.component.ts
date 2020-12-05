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
    

  var columns = 10;
  var rows = 1;
  var frameRate = 15;

  var sheet = two.makeSprite('https://storage.googleapis.com/archive.jono.fyi/projects/two-js/junk/images/ken-sprite.png', 
    400, 300, columns, rows, 100);
    sheet.play();

    two.bind('update', (framesPerSecond)=>{
      

    }).play();

  }

  
  title = 'NewGame';

  }