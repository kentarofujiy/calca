import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialogRef, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { ClienteDataService } from '../cliente-data.service';
import { ClienteDialogComponent } from '../cliente-dialog/cliente-dialog.component';
import { ClienteDeleteDialogComponent } from '../cliente-delete-dialog/cliente-delete-dialog.component';
import { Cliente } from '../cliente';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cliente-table',
  templateUrl: './cliente-table.component.html',
  styleUrls: ['./cliente-table.component.css']
})
export class ClienteTableComponent implements OnInit, OnDestroy {

  public tabledata: Cliente[] = [];
  public getClienteSub: Subscription;
  displayedColumns: string[] = [    'id', 'razao', 'cnpj', 'cidade', 'estado', 'grupo', 'classe', 'modalidade', 'potencia',	'horasprodutivasduteis', 'horasprodutivassabados', 'horasprodutivasdomingos', 'posto', 'subgrupo'
];

  public my_Class = 'color=primary';

  dataSource: MatTableDataSource<Cliente>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private clienteDataService: ClienteDataService,
  ) {

  }

  ngOnInit() {
    this.getClientes(); // wir packen nicht alles unter ngOnInit
  }
  ngOnDestroy() {
    if (this.getClienteSub) {
      this.getClienteSub.unsubscribe();
    }
  }
  getClientes() {
    this.getClienteSub = this.clienteDataService.getAllClientes()
      .subscribe((tabledata) => { // hier könnte auch eine anderer neme vom typ Cliente[] = [] stehen
        // https://stackblitz.com/edit/angular-dnj6gj?file=app%2Ftable-filtering-example.ts
        this.tabledata = tabledata;
        this.dataSource = new MatTableDataSource(tabledata);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;


    if (this.dataSource.paginator) {
       this.dataSource.paginator.firstPage();
     }
  }



  editItem(data: any = {}, isNew?) {
    const title = isNew ? 'Add cliente' : 'Update cliente';
    const dialogRef: MatDialogRef<any> = this.dialog.open(ClienteDialogComponent, {
      width: '650px',
      disableClose: true,
      data: { title: title, payload: data }
    });
    dialogRef.afterClosed()
      .subscribe(result => {
        console.log('dialog: ' + JSON.stringify(result));
        if (!result) {
          console.log('nothing to process');
          return;
        }
        // otherwise continue with data
        if (isNew) {
          this.clienteDataService.addCliente(result)
            .subscribe((newProd) => {
              this.tabledata = this.tabledata.concat(newProd);
              this.dataSource.data = this.tabledata;
            });
        } else {
          this.clienteDataService.updateCliente(data.id, result)
            .subscribe((updatedCliente) => {
              const foundIndex = this.tabledata.findIndex(x => x.id === data.id);
              Object.assign(this.tabledata[foundIndex] , updatedCliente);
              // https://github.com/angular/material2/issues/8381 Answer willshowell commented on 13 Nov 2017
              // we need to add .data
              this.dataSource.data = this.tabledata;
            });
        }
      });
  }

  deleteItem(row) {
    const title = 'Confirm';
    const message = 'Delete ' + row.name + '?';
    const dialogRef = this.dialog.open(ClienteDeleteDialogComponent, {
      width: '400px',
      disableClose: true,
      data: {title: title, message: message}
    });
    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          this.clienteDataService.removeItem(row.id)
            .subscribe((_) => {
              this.tabledata = this.tabledata.filter((d) => d.id !== row.id);
              this.dataSource.data = this.tabledata;
            });
        }
      });
  }

}

