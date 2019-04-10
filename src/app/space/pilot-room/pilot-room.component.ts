import { Component, OnInit } from '@angular/core';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.scss']
})
export class PilotRoomComponent implements OnInit {

  pilots: Pilot[] = [];
  selectedPilot: Pilot = null;

  constructor() { }

  ngOnInit() {
    this.pilots.push(new Pilot('Kapitan Bomba', 'assets/kapitanbomba.jpeg'));
    this.pilots.push(new Pilot('Generał Lufa', 'assets/generallufa.png'));
  }

  select(pilot: Pilot) {
    this.selectedPilot = pilot;
  }

}
