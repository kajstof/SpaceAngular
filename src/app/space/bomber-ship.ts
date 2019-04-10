import {SpaceShip} from "./space-ship";
import {Pilot} from "./pilot";

export class BomberShip extends SpaceShip{
  constructor(pilot?: Pilot){
    super({modelName: 'Orzeł 1', imageUrl: '/assets/orzel1.png', pilot: pilot})
  }
}
