import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ClienteDataService {

  clientes: Cliente[] = [];

  constructor(
    private api: ApiService
  ) { }
  // GET /clientes
  getAllClientes(): Observable<Cliente[]> {
    return this.api.getAllClientes();
  }

  // POST /clientes
  addCliente(cliente: Cliente): Observable<Cliente> {
    return this.api.createCliente(cliente);
  }

  // DELETE /clientes/:id
  removeItem(id: number): Observable<Cliente> {
    return this.api.deleteClienteById(id);
  }

  // PUT /clientes/:id
  updateCliente(id: number, cliente: Cliente): Observable<Cliente> {
    this.clientes = this.clientes.map(i => {
      if (i.id === id) {
        return Object.assign({}, i, cliente);
      }
      return i;
    });
    return this.api.updateCliente(id, cliente);
  }



  // GET /clientes/:id
  getClienteById(id: number): Observable<Cliente> {
    return this.api.getClienteById(id);
  }
}
