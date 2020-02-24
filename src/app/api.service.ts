import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';
import { Product } from './product';
import { Tarifa } from './tarifa';
import { Cliente } from './cliente';
import { Cenario } from './cenario';
import { Lancamento } from './lancamento';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// const API_URL = environment.apiUrl;
const API_URL = 'http://localhost/calca/api/v1';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: Http
  ) { }

  // API: GET /products
  public getAllProducts(): Observable<Product[]> {
    return this.http
      .get(API_URL + '/products')
        //.get('/api/v1/products')
      .map(response => {
        const products = response.json().data;
        console.log(response.json().data);
        return products.map((product) => new Product(product));
      })
      .catch(this.handleError);
  }

  // API: POST /products
  public createProduct(product: Product): Observable<Product> {
    return this.http
    .post(API_URL + '/products', product)
    //.post('/api/v1/products', product)
    .map(response => {
      product.id = response.json().data;
      return new Product(product);
    })
    .catch(this.handleError);
  }

  // API: GET /products/:id
  public getProductById(productId: number): Observable<Product> {
    return this.http
    .get(API_URL + '/products/' + productId)
    // .get('/api/v1/products/' + productId)
    .map(response => {
      return new Product(response.json());
    })
    .catch(this.handleError);
  }

  // API: PUT /products/:id
  public updateProduct(id: number, product: Product): Observable<Product> {
    return this.http
     .put(API_URL + '/products/' + product.id, product)
    // .put('/api/v1/products/' + id, product)
    .map(response => {
      return new Product(product);
    })
    .catch(this.handleError);
  }

  // DELETE /products/:id
  public deleteProductById(productId: number): Observable<null>  {
    return this.http
     .delete(API_URL + '/products/' + productId)
    // .delete('/api/v1/products/' + productId)
    .map(response => null)
    .catch(this.handleError);
  }

  // API: GET /tarifas
  public getAllTarifas(): Observable<Tarifa[]> {
    return this.http
      .get(API_URL + '/tarifas')
        //.get('/api/v1/tarifas')
      .map(response => {
        const tarifas = response.json().data;
        console.log(response.json().data);
        return tarifas.map((tarifa) => new Tarifa(tarifa));
      })
      .catch(this.handleError);
  }

  // API: POST /tarifas
  public createTarifa(tarifa: Tarifa): Observable<Tarifa> {
    return this.http
    .post(API_URL + '/tarifas', tarifa)
    //.post('/api/v1/tarifas', tarifa)
    .map(response => {
      tarifa.id = response.json().data;
      return new Tarifa(tarifa);
    })
    .catch(this.handleError);
  }

  // API: GET /tarifas/:id
  public getTarifaById(tarifaId: number): Observable<Tarifa> {
    return this.http
    .get(API_URL + '/tarifas/' + tarifaId)
    // .get('/api/v1/tarifas/' + tarifaId)
    .map(response => {
      return new Tarifa(response.json());
    })
    .catch(this.handleError);
  }

  // API: PUT /tarifas/:id
  public updateTarifa(id: number, tarifa: Tarifa): Observable<Tarifa> {
    return this.http
     .put(API_URL + '/tarifas/' + tarifa.id, tarifa)
    // .put('/api/v1/tarifas/' + id, tarifa)
    .map(response => {
      return new Tarifa(tarifa);
    })
    .catch(this.handleError);
  }

  // DELETE /tarifas/:id
  public deleteTarifaById(tarifaId: number): Observable<null>  {
    return this.http
     .delete(API_URL + '/tarifas/' + tarifaId)
    // .delete('/api/v1/tarifas/' + tarifaId)
    .map(response => null)
    .catch(this.handleError);
  }

    // API: GET /clientes
    public getAllClientes(): Observable<Cliente[]> {
      return this.http
        .get(API_URL + '/clientes')
          //.get('/api/v1/clientes')
        .map(response => {
          const clientes = response.json().data;
          console.log(response.json().data);
          return clientes.map((cliente) => new Cliente(cliente));
        })
        .catch(this.handleError);
    }
  
    // API: POST /clientes
    public createCliente(cliente: Cliente): Observable<Cliente> {
      return this.http
      .post(API_URL + '/clientes', cliente)
      //.post('/api/v1/clientes', cliente)
      .map(response => {
        cliente.id = response.json().data;
        return new Cliente(cliente);
      })
      .catch(this.handleError);
    }
  
    // API: GET /clientes/:id
    public getClienteById(clienteId: number): Observable<Cliente> {
      return this.http
      .get(API_URL + '/clientes/' + clienteId)
      // .get('/api/v1/clientes/' + clienteId)
      .map(response => {
        return new Cliente(response.json());
      })
      .catch(this.handleError);
    }
  
    // API: PUT /clientes/:id
    public updateCliente(id: number, cliente: Cliente): Observable<Cliente> {
      return this.http
       .put(API_URL + '/clientes/' + cliente.id, cliente)
      // .put('/api/v1/clientes/' + id, cliente)
      .map(response => {
        return new Cliente(cliente);
      })
      .catch(this.handleError);
    }
  
    // DELETE /clientes/:id
    public deleteClienteById(clienteId: number): Observable<null>  {
      return this.http
       .delete(API_URL + '/clientes/' + clienteId)
      // .delete('/api/v1/clientes/' + clienteId)
      .map(response => null)
      .catch(this.handleError);
    }


      // API: GET /lancamentos
      public getAllLancamentos(): Observable<Lancamento[]> {
        return this.http
          .get(API_URL + '/lancamentos')
            //.get('/api/v1/lancamentos')
          .map(response => {
            const lancamentos = response.json().data;
            console.log(response.json().data);
            return lancamentos.map((lancamento) => new Lancamento(lancamento));
          })
          .catch(this.handleError);
      }
    
      // API: POST /lancamentos
      public createLancamento(lancamento: Lancamento): Observable<Lancamento> {
        return this.http
        .post(API_URL + '/lancamentos', lancamento)
        //.post('/api/v1/lancamentos', lancamento)
        .map(response => {
          lancamento.id = response.json().data;
          return new Lancamento(lancamento);
        })
        .catch(this.handleError);
      }
  
    // API: GET /lancamentos/:id
    public getLancamentoById(lancamentoId: number): Observable<Lancamento> {
      return this.http
      .get(API_URL + '/lancamentos/' + lancamentoId)
      // .get('/api/v1/lancamentos/' + lancamentoId)
      .map(response => {
        return new Lancamento(response.json());
      })
      .catch(this.handleError);
    }
  
    // API: PUT /lancamentos/:id
    public updateLancamento(id: number, lancamento: Lancamento): Observable<Lancamento> {
      return this.http
       .put(API_URL + '/lancamentos/' + lancamento.id, lancamento)
      // .put('/api/v1/lancamentos/' + id, lancamento)
      .map(response => {
        return new Lancamento(lancamento);
      })
      .catch(this.handleError);
    }
  
    // DELETE /lancamentos/:id
    public deleteLancamentoById(lancamentoId: number): Observable<null>  {
      return this.http
       .delete(API_URL + '/lancamentos/' + lancamentoId)
      // .delete('/api/v1/lancamentos/' + lancamentoId)
      .map(response => null)
      .catch(this.handleError);
    }


    
      // API: GET /cenarios
      public getAllCenarios(): Observable<Cenario[]> {
        return this.http
          .get(API_URL + '/cenarios')
            //.get('/api/v1/cenarios')
          .map(response => {
            const cenarios = response.json().data;
            console.log(response.json().data);
            return cenarios.map((cenario) => new Cenario(cenario));
          })
          .catch(this.handleError);
      }
    
      // API: POST /cenarios
      public createCenario(cenario: Cenario): Observable<Cenario> {
        return this.http
        .post(API_URL + '/cenarios', cenario)
        //.post('/api/v1/cenarios', cenario)
        .map(response => {
          cenario.id = response.json().data;
          return new Cenario(cenario);
        })
        .catch(this.handleError);
      }
  
    // API: GET /cenarios/:id
    public getCenarioById(cenarioId: number): Observable<Cenario> {
      return this.http
      .get(API_URL + '/cenarios/' + cenarioId)
      // .get('/api/v1/cenarios/' + cenarioId)
      .map(response => {
        return new Cenario(response.json());
      })
      .catch(this.handleError);
    }
  
    // API: PUT /cenarios/:id
    public updateCenario(id: number, cenario: Cenario): Observable<Cenario> {
      return this.http
       .put(API_URL + '/cenarios/' + cenario.id, cenario)
      // .put('/api/v1/cenarios/' + id, cenario)
      .map(response => {
        return new Cenario(cenario);
      })
      .catch(this.handleError);
    }
  
    // DELETE /cenarios/:id
    public deleteCenarioById(cenarioId: number): Observable<null>  {
      return this.http
       .delete(API_URL + '/cenarios/' + cenarioId)
      // .delete('/api/v1/cenarios/' + cenarioId)
      .map(response => null)
      .catch(this.handleError);
    }
  

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
