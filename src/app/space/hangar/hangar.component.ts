import { Component, OnInit, ViewChild } from '@angular/core';
import { SpaceShip } from '../space-ship';
import { FighterShip } from '../fighter-ship';
import { BomberShip } from '../bomber-ship';
import { Pilot } from '../pilot';
import { PilotRoomComponent } from '../pilot-room/pilot-room.component';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.scss']
})
export class HangarComponent implements OnInit {
  @ViewChild(PilotRoomComponent) pilotRoom: PilotRoomComponent;
  spaceShips: SpaceShip[] = [];
  selectedPilot: Pilot = null;

  constructor() {
  }

  ngOnInit(): void {
    this.spaceShips.push(new FighterShip(new Pilot('Kapitan Bomba', '/assets/kapitanbomba.png')));
    this.spaceShips.push(new BomberShip(new Pilot('Generał Lufa', '/assets/generallufa.png')));
  }

  assignPilot(spaceShip: SpaceShip) {
    spaceShip.pilot = this.selectedPilot;
    this.pilotRoom.pilotLeave();
  }

  deassignPilot(spaceShip: SpaceShip) {
    this.pilotRoom.pilotReturn(spaceShip.pilot);
    spaceShip.pilot = null;
  }

}
