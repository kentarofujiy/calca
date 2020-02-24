import { Injectable } from '@angular/core';
import { Tarifa } from './tarifa';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class TarifaDataService {

  tarifas: Tarifa[] = [];

  constructor(
    private api: ApiService
  ) { }
  // GET /tarifas
  getAllTarifas(): Observable<Tarifa[]> {
    return this.api.getAllTarifas();
  }

  // POST /tarifas
  addTarifa(tarifa: Tarifa): Observable<Tarifa> {
    return this.api.createTarifa(tarifa);
  }

  // DELETE /tarifas/:id
  removeItem(id: number): Observable<Tarifa> {
    return this.api.deleteTarifaById(id);
  }

  // PUT /tarifas/:id
  updateTarifa(id: number, tarifa: Tarifa): Observable<Tarifa> {
    this.tarifas = this.tarifas.map(i => {
      if (i.id === id) {
        return Object.assign({}, i, tarifa);
      }
      return i;
    });
    return this.api.updateTarifa(id, tarifa);
  }



  // GET /tarifas/:id
  getTarifaById(id: number): Observable<Tarifa> {
    return this.api.getTarifaById(id);
  }
}
