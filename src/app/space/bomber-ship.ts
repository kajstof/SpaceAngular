import { SpaceShip } from './space-ship';
import { Pilot } from './pilot';

export class BomberShip extends SpaceShip {
  constructor(pilot?: Pilot) {
    super('Orzeł 1', '/assets/orzel1.png', pilot);
  }
}
