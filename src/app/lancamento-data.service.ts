import { Injectable } from '@angular/core';
import { Lancamento } from './lancamento';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class LancamentoDataService {

  lancamentos: Lancamento[] = [];

  constructor(
    private api: ApiService
  ) { }
  // GET /lancamentos
  getAllLancamentos(): Observable<Lancamento[]> {
    return this.api.getAllLancamentos();
  }

  // POST /lancamentos
  addLancamento(lancamento: Lancamento): Observable<Lancamento> {
    return this.api.createLancamento(lancamento);
  }

  // DELETE /lancamentos/:id
  removeItem(id: number): Observable<Lancamento> {
    return this.api.deleteLancamentoById(id);
  }

  // PUT /lancamentos/:id
  updateLancamento(id: number, lancamento: Lancamento): Observable<Lancamento> {
    this.lancamentos = this.lancamentos.map(i => {
      if (i.id === id) {
        return Object.assign({}, i, lancamento);
      }
      return i;
    });
    return this.api.updateLancamento(id, lancamento);
  }

  // Toggle todo complete
  toggleLancamentoStatus(lancamento: Lancamento) {
    if (lancamento.status === 'Active') {
      lancamento.status = 'Inactive';
     } else { lancamento.status  = 'Active'; }
    return this.api.updateLancamento(lancamento.id, lancamento );
  }

  // GET /lancamentos/:id
  getLancamentoById(id: number): Observable<Lancamento> {
    return this.api.getLancamentoById(id);
  }
}
