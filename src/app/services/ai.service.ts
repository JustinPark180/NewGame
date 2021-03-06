import { Injectable } from '@angular/core';
import { CameraService } from './camera.service';
import { MapService } from './map.service';
import { Sprite } from './sprite.service';

@Injectable({
  providedIn: 'root'
})
export class AiService {
  private _max_x = 0;
  private _max_y = 0;

  private _changeDirectionChance = .005;
  private _updateMovementXChance = .8;
  private _updateMovementYChance = .2;

  constructor(private _mapService: MapService) {
  }

  checkXBounday(sprite: Sprite) {
    if (sprite.direction == 'right') {
      if (sprite.x > this._mapService.MAX_X) {
        return false;
      }
    }
    else if (sprite.direction == 'left') {
      if (sprite.x < 0) {
        return false;
      }
    }
    return true;
  }

  checkYBoundary(sprite: Sprite, direction: string) {
    if (direction == 'up') {
      if (sprite.y <= 0) {
        return false;
      }
    }
    else {
      if (sprite.y > this._mapService.MAX_Y) {
        return false;
      }
    }
    return true;
  }

  basicAI(sprite: Sprite) {
    if (sprite.maxSpeed == 0) return sprite;
    let chance = Math.random();
    if (chance < this._changeDirectionChance) {
      if (sprite.direction == 'right') {
        sprite.direction = 'left';
      }
      else {
        sprite.direction = 'right';
      }
    }
    chance = Math.random();
    if (chance < this._updateMovementXChance) {
      if (sprite.direction == 'right') {
        if (this.checkXBounday(sprite)) {
          sprite.x = sprite.x + 3;
        }
      }
      else {
        if (this.checkXBounday(sprite)) {
          sprite.x = sprite.x - 3;
        }

      }
    }
    chance = Math.random();
    if (chance < this._updateMovementYChance) {
      chance = Math.random();
      if (chance < .5) {
        if (this.checkYBoundary(sprite, 'up')) {
          sprite.y = sprite.y - 3;
        }
      }
      else {
        if (this.checkYBoundary(sprite, 'down')) {
          sprite.y = sprite.y + 3;
        }

      }
    }
    return sprite;
  }

  predatorAI(sprite: Sprite, x: number, y: number, range: number) {
    let distance = Math.pow(Math.pow(sprite.x - x, 2) + Math.pow(sprite.y - y, 2), .5)

    if (distance <= range) {
      if (sprite.x <= x) {
        sprite.direction = 'right'
        sprite.x = sprite.x + sprite.maxSpeed;
      }
      else {
        sprite.direction = 'left'
        sprite.x = sprite.x - sprite.maxSpeed;
      }
      if (sprite.y <= y) {
        sprite.y = sprite.y + sprite.maxSpeed;
      }
      else {
        sprite.y = sprite.y - sprite.maxSpeed;
      }
    }
  else {
    return this.basicAI(sprite);
  }
  return sprite;
}

preyAI(sprite: Sprite, x: number, y: number, range: number) {
  let distance = Math.pow(Math.pow(sprite.x - x, 2) + Math.pow(sprite.y - y, 2), .5)

  if (distance <= range) {
    if (sprite.x <= x) {
      sprite.direction = 'left'
      sprite.x = sprite.x - sprite.maxSpeed;
    }
    else {
      sprite.direction = 'right'
      sprite.x = sprite.x + sprite.maxSpeed;
    }
    if (sprite.y <= y) {
      sprite.y = sprite.y - sprite.maxSpeed;
    }
    else {
      sprite.y = sprite.y + sprite.maxSpeed;
    }
  }
else {
  return this.basicAI(sprite);
}
return sprite;
}
}

