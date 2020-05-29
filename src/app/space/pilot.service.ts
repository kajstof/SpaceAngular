import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Pilot, PilotAttrs } from './pilot';

@Injectable({
  providedIn: 'root'
})
export class PilotService {
  constructor(private http: HttpClient) {
  }

  getPilots(): Observable<Pilot[]> {
    return this.http.get<PilotAttrs[]>(`${environment.apiUrl}/pilots`).pipe(
      map((data) => data.map((pilotAttrs) => new Pilot(pilotAttrs)))
    );
  }

  getPilot(id: number) {
    return this.http.get<PilotAttrs>(`/api/pilots/${id}`).pipe(
      map((pilotAttrs) => new Pilot(pilotAttrs))
    );
  }
}
