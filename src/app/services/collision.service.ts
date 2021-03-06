import { Injectable } from "@angular/core";
import { AudioService } from "./audio.service";
import { GameService } from "./game.service";
import { MapService } from "./map.service";
import { Sprite } from "./sprite.service";

@Injectable({
    providedIn: 'root'
})
export class CollisionService {
   

    constructor(private _mapService: MapService, private _gameService:GameService, private _audioService:AudioService, ) { }

    detectCollision(mySprite: Sprite, targetSprite: Sprite, ) {
        const OFFSET = 4;
    
        let width=mySprite.sprite.width;
        let height = mySprite.sprite.height;
        
        let leftBound = mySprite.x-(width/OFFSET);
        let rightBound = mySprite.x+(width/OFFSET);
        let upperBound = mySprite.y-(height/OFFSET);
        let lowerBound = mySprite.y+(height/OFFSET);
        width = targetSprite.sprite.width;
        height = targetSprite.sprite.height;
    
        let targetLeftBound = targetSprite.x-(width/OFFSET);
        let targetRightBound = targetSprite.x+(width/OFFSET);
        let targetUpperBound = targetSprite.y-(height/OFFSET);
        let targetLowerBound = targetSprite.y+(height/OFFSET);
    
        if ((leftBound<targetLeftBound && targetLeftBound<rightBound) 
        || (leftBound<targetRightBound && targetRightBound<rightBound)) {
          //console.log('horizontal check!')
          if ((upperBound<targetUpperBound && targetUpperBound<lowerBound) 
          || (upperBound<targetLowerBound && targetLowerBound<lowerBound)) {
              if (targetSprite.type == 'prey') {
                targetSprite.scale = 0
                this._audioService.score();
              }
              else if (targetSprite.type =='predator') {
                mySprite.state = -1;
                this._audioService.score();

            }
          }
        }
      }
      
      detectBorder(sprite: Sprite,oldX: number, oldY: number, newX: number, newY: number) {
        const OFFSET = 2;
    
        let width=sprite.sprite.width;
        let height = sprite.sprite.height;
        
        let leftBound = oldX-(width/OFFSET);
        let rightBound = oldX+(width/OFFSET);
        let upperBound = oldY-(height/OFFSET);
        let lowerBound = oldY+(height/OFFSET);
    
        if (leftBound<1 && newX<sprite.x) return true
        if (rightBound>this._mapService.MAX_X && newX>sprite.x) return true
        if (upperBound<1 && newY<sprite.y) return true
        if (lowerBound>this._mapService.MAX_Y && newY>sprite.y) return true 
        return false
      }
        
}