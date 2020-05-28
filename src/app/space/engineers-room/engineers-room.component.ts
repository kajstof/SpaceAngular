import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SpaceShipType } from '../space-ship-type.enum';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderFormValue } from '../order-form-value';
import { ShipType } from '../ship-type';
import { SpaceShip } from '../space-ship';
import { SpaceShipService } from '../space-ship.service';

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.scss']
})
export class EngineersRoomComponent implements OnInit {
  @Output() shipProduced = new EventEmitter<SpaceShip>();
  spaceShipTypes: ShipType[] = [
    {label: 'Myśliwiec', value: SpaceShipType.Fighter},
    {label: 'Bombowiec', value: SpaceShipType.Bomber}
  ];
  form = new FormGroup({
    shipType: new FormControl(SpaceShipType.Fighter, {
      validators: [Validators.required]
    }),
    shipCount: new FormControl(1, {
      validators: [Validators.required, Validators.min(1), Validators.max(5)]
    })
  });
  isProducing: boolean;

  constructor(private spaceShipService: SpaceShipService) {
  }

  ngOnInit(): void {
  }

  orderSpaceShips(formValues: OrderFormValue) {
    this.isProducing = true;
    this.spaceShipService.produceShips(formValues)
      .subscribe({
        next: (ship) => this.shipProduced.emit(ship),
        complete: () => this.isProducing = false
      });
  }
}
