import { Component, OnInit } from '@angular/core';
import { SpaceShip } from '../space-ship';
import { FighterShip } from '../fighter-ship';
import { BomberShip } from '../bomber-ship';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.scss']
})
export class HangarComponent implements OnInit {
  spaceShips: SpaceShip[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.spaceShips.push(new FighterShip(new Pilot('Kapitan Bomba', '/assets/kapitanbomba.png')));
    this.spaceShips.push(new BomberShip(new Pilot('Generał Lufa', '/assets/generallufa.png')));
  }

}
