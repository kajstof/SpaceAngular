import { SpaceShip } from './space-ship';
import { Pilot } from './pilot';

export class FighterShip extends SpaceShip {
  constructor(pilot?: Pilot) {
    super('Orzeł 7', '/assets/orzel7.jpg', pilot);
  }
}
