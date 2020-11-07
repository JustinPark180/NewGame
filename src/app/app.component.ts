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

    let circle=two.makeCircle(72, 100, 50);
    circle.fill = "#FF8000";
    let rect = two.makeRectangle(213, 100, 100, 100);
    

    two.update();
  }

  
  title = 'NewGame';

  }