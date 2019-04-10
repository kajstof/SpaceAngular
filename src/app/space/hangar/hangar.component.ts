import { Component, OnInit } from '@angular/core';
import {SpaceShip} from "../space-ship";
import {FighterShip} from "../fighter-ship";
import {BomberShip} from "../bomber-ship";

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.scss']
})
export class HangarComponent implements OnInit {

  spaceShips: SpaceShip[] = [];

  constructor() { }

  ngOnInit() {
    this.spaceShips.push(new FighterShip());
    this.spaceShips.push(new BomberShip());
  }

}
