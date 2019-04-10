import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-space-ship',
  templateUrl: './space-ship.component.html',
  styleUrls: ['./space-ship.component.scss']
})
export class SpaceShipComponent implements OnInit {
  spaceShip = {
    modelName: 'Orzeł 7',
    imageUrl: '/assets/orzel7.jpg',
    health: 97,
    activeShields: true,
    activeWeapons: false
  };

  constructor() { }

  ngOnInit() {
  }

}
