import {SpaceShip} from "./space-ship";
import {Pilot} from "./pilot";

export class TransportShip extends SpaceShip{
  constructor(pilot?: Pilot){
    super({modelName: 'Raptor', imageUrl: '/assets/raptor.png', pilot: pilot})
  }
}
