import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Pilot, PilotAttrs } from './pilot';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PilotService {
  constructor(private http: HttpClient) { }

  getPilots(): Observable<Pilot[]> {
    return this.http.get<PilotAttrs[]>('/api/pilots').pipe(
      map((data) => data.map((pilotAttrs) => new Pilot(pilotAttrs)))
    );
  }

  getPilot(id: number) {
    return this.http.get<PilotAttrs>(`/api/pilots/${id}`).pipe(
      map((pilotAttrs) => new Pilot(pilotAttrs))
    );
  }
}
