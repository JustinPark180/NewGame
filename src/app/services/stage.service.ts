import { Injectable } from '@angular/core';

export interface Stage {
  level: number;
  speeFactor: number;
  numberOfPreys: number;
  numberOfPredators: number;
  chanceOfBetterAI: number;
  rangeToTriggerBetterAI: number;
}

@Injectable({
  providedIn: 'root'
})
export class StageService {

  constructor() { }

  public stages: Stage[] = [

    {
      level: 1,
      speeFactor: 1,
      numberOfPreys: 10,
      numberOfPredators: 1,
      chanceOfBetterAI: 0,
      rangeToTriggerBetterAI: 100,
    },
    {
      level: 2,
      speeFactor: 1.15,
      numberOfPreys: 15,
      numberOfPredators: 3,
      chanceOfBetterAI: 0,
      rangeToTriggerBetterAI: 100,
    },
    {
      level: 3,
      speeFactor: 1.5,
      numberOfPreys: 18,
      numberOfPredators: 6,
      chanceOfBetterAI: 0,
      rangeToTriggerBetterAI: 100,
    },
  ]
}
