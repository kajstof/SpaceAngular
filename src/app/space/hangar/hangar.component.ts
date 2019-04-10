import { Component, OnInit, ViewChild } from '@angular/core';
import { SpaceShip } from "../space-ship";
import { FighterShip } from "../fighter-ship";
import { BomberShip } from "../bomber-ship";
import { Pilot } from "../pilot";
import { TransportShip } from "../transport-ship";
import { PilotRoomComponent } from "../pilot-room/pilot-room.component";

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.scss']
})
export class HangarComponent implements OnInit {
  @ViewChild(PilotRoomComponent) pilotRoom: PilotRoomComponent;

  spaceShips: SpaceShip[] = [];
  selectedPilot: Pilot = null;

  constructor() { }

  ngOnInit() {
    this.spaceShips.push(new FighterShip());
    this.spaceShips.push(new BomberShip());
    this.spaceShips.push(new TransportShip());
  }

  deassignPilot(spaceShip: SpaceShip) {
    this.pilotRoom.pilotReturn(spaceShip.pilot);
    spaceShip.pilot = null;
  }

  assignPilot(spaceShip: SpaceShip) {
    spaceShip.pilot = this.selectedPilot;
    this.pilotRoom.pilotLeave();
  }
}
