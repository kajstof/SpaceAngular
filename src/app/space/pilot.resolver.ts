import { Injectable } from '@angular/core';
import { PilotService } from './pilot.service';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { of, Observable } from 'rxjs';
import { Pilot } from './pilot';

@Injectable({ providedIn: 'root' })
export class PilotResolver implements Resolve<Pilot>{
  constructor(private pilotService: PilotService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pilot> {
    if (route.params.id === 'new') {
      return of(new Pilot());
    } else {
      return this.pilotService.getPilot(route.params.id);
    }
  }
}
