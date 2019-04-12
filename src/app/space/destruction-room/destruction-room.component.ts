import { Component, OnInit } from '@angular/core';
import { SpaceShipService } from '../space-ship.service';

@Component({
  selector: 'app-destruction-room',
  templateUrl: './destruction-room.component.html',
  styleUrls: ['./destruction-room.component.scss']
})
export class DestructionRoomComponent implements OnInit {
  spaceShips = this.spaceShipService.hangarShips;
  selectedShipIndex: number = null;

  constructor(private spaceShipService: SpaceShipService) {}

  ngOnInit() { }

  orderDestruction() {
    this.spaceShipService.removeShip(this.selectedShipIndex);
    this.selectedShipIndex = null;
  }
}
