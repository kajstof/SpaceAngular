import { Pilot } from './pilot';

export abstract class SpaceShip {
  modelName: string;
  imageUrl: string;
  health = 100;
  activeShields = true;
  activeWeapons = true;
  pilot: Pilot;

  protected constructor(attrs: { modelName: string, imageUrl: string, pilot: Pilot }) {
    this.modelName = attrs.modelName;
    this.imageUrl = attrs.imageUrl;
    this.pilot = attrs.pilot;
  }
}
