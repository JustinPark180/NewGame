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
    
    
    let now = Date.now()/1000;


    let circle = two.makeCircle(500, 50, 50);
    let scaleDelta = -0.01;
    

    two.bind('update', (framesPerSecond)=>{
      let changeintime=Date.now()/1000;
      circle.scale = circle.scale+scaleDelta;
      if (circle.scale>3){
        scaleDelta = -0.01
      }
      if (circle.scale<0.5){
        scaleDelta = 0.01
      }
      
    

    }).play();

  }

  
  title = 'NewGame';

  }