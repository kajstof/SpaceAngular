import { SpaceShip } from "./space-ship";
import {Pilot} from "./pilot";

export class FighterShip extends SpaceShip{
  constructor(pilot?: Pilot){
    super({modelName: 'Orzeł 7', imageUrl: '/assets/orzel7.jpg', pilot: pilot});
  }
}
