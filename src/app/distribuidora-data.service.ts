import { Injectable } from '@angular/core';
import { Distribuidora } from './distribuidora';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class DistribuidoraDataService {

  distribuidoras: Distribuidora[] = [];

  constructor(
    private api: ApiService
  ) { }
  // GET /distribuidoras
  getAllDistribuidoras(): Observable<Distribuidora[]> {
    return this.api.getAllDistribuidoras();
  }

  // POST /distribuidoras
  addDistribuidora(distribuidora: Distribuidora): Observable<Distribuidora> {
    return this.api.createDistribuidora(distribuidora);
  }

  // DELETE /distribuidoras/:id
  removeItem(id: number): Observable<Distribuidora> {
    return this.api.deleteDistribuidoraById(id);
  }

  // PUT /distribuidoras/:id
  updateDistribuidora(id: number, distribuidora: Distribuidora): Observable<Distribuidora> {
    this.distribuidoras = this.distribuidoras.map(i => {
      if (i.id === id) {
        return Object.assign({}, i, distribuidora);
      }
      return i;
    });
    return this.api.updateDistribuidora(id, distribuidora);
  }



  // GET /distribuidoras/:id
  getDistribuidoraById(id: number): Observable<Distribuidora> {
    return this.api.getDistribuidoraById(id);
  }
}
