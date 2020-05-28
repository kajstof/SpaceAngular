import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.scss']
})
export class PilotRoomComponent implements OnInit {
  @Output() selected = new EventEmitter<Pilot>();
  pilots: Pilot[] = [];
  selectedPilot: Pilot = null;

  constructor() {
  }

  ngOnInit(): void {
    this.pilots.push(new Pilot('Kapitan Bomba', '/assets/kapitanbomba.png'));
    this.pilots.push(new Pilot('Generał Lufa', '/assets/generallufa.png'));
    this.pilots.push(new Pilot('Chorąży Torpeda'));
  }

  select(pilot: Pilot): void {
    this.selectedPilot = pilot;
    this.selected.emit(pilot);
  }

  pilotReturn(pilot: Pilot) {
    this.pilots.push(pilot);
  }

  pilotLeave() {
    const index = this.pilots.indexOf(this.selectedPilot);
    this.pilots.splice(index, 1);
    this.select(null);
  }

}
