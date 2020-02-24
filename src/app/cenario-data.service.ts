import { Injectable } from '@angular/core';
import { Cenario } from './cenario';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CenarioDataService {

  cenarios: Cenario[] = [];

  constructor(
    private api: ApiService
  ) { }
  // GET /cenarios
  getAllCenarios(): Observable<Cenario[]> {
    return this.api.getAllCenarios();
  }

  // POST /cenarios
  addCenario(cenario: Cenario): Observable<Cenario> {
    return this.api.createCenario(cenario);
  }

  // DELETE /cenarios/:id
  removeItem(id: number): Observable<Cenario> {
    return this.api.deleteCenarioById(id);
  }

  // PUT /cenarios/:id
  updateCenario(id: number, cenario: Cenario): Observable<Cenario> {
    this.cenarios = this.cenarios.map(i => {
      if (i.id === id) {
        return Object.assign({}, i, cenario);
      }
      return i;
    });
    return this.api.updateCenario(id, cenario);
  }



  // GET /cenarios/:id
  getCenarioById(id: number): Observable<Cenario> {
    return this.api.getCenarioById(id);
  }
}
