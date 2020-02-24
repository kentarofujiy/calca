import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialogRef, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { LancamentoDataService } from '../lancamento-data.service';
import { LancamentoDialogComponent } from '../lancamento-dialog/lancamento-dialog.component';
import { LancamentoDeleteDialogComponent } from '../lancamento-delete-dialog/lancamento-delete-dialog.component';
import { Lancamento } from '../lancamento';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lancamento-table',
  templateUrl: './lancamento-table.component.html',
  styleUrls: ['./lancamento-table.component.css']
})
export class LancamentoTableComponent implements OnInit, OnDestroy {

  public tabledata: Lancamento[] = [];
  public getLancamentoSub: Subscription;
  displayedColumns: string[] = [    'id','dist','razao','cnpj','login','data','grupo','consumointerm','consumofponta','custoponta','custofponta','custointerm','idcliente','mes','ano','tstributo','tctributo','status','consumoponta','potencia','consumotusd','consumote','consumooutros','custobponta','custobfponta','custobinterm','soma','totalctributosbponta','totalctributosbfponta','totalctributosbinterm',
];

  public my_Class = 'color=primary';

  dataSource: MatTableDataSource<Lancamento>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private lancamentoDataService: LancamentoDataService,
  ) {

  }

  ngOnInit() {
    this.getLancamentos(); // wir packen nicht alles unter ngOnInit
  }
  ngOnDestroy() {
    if (this.getLancamentoSub) {
      this.getLancamentoSub.unsubscribe();
    }
  }
  getLancamentos() {
    this.getLancamentoSub = this.lancamentoDataService.getAllLancamentos()
      .subscribe((tabledata) => { // hier könnte auch eine anderer neme vom typ Lancamento[] = [] stehen
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
    const title = isNew ? 'Add lancamento' : 'Update lancamento';
    const dialogRef: MatDialogRef<any> = this.dialog.open(LancamentoDialogComponent, {
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
          this.lancamentoDataService.addLancamento(result)
            .subscribe((newProd) => {
              this.tabledata = this.tabledata.concat(newProd);
              this.dataSource.data = this.tabledata;
            });
        } else {
          this.lancamentoDataService.updateLancamento(data.id, result)
            .subscribe((updatedLancamento) => {
              const foundIndex = this.tabledata.findIndex(x => x.id === data.id);
              Object.assign(this.tabledata[foundIndex] , updatedLancamento);
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
    const dialogRef = this.dialog.open(LancamentoDeleteDialogComponent, {
      width: '400px',
      disableClose: true,
      data: {title: title, message: message}
    });
    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          this.lancamentoDataService.removeItem(row.id)
            .subscribe((_) => {
              this.tabledata = this.tabledata.filter((d) => d.id !== row.id);
              this.dataSource.data = this.tabledata;
            });
        }
      });
  }

}

