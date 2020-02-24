import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialogRef, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { TarifaDataService } from '../tarifa-data.service';
import { TarifaDialogComponent } from '../tarifa-dialog/tarifa-dialog.component';
import { TarifaDeleteDialogComponent } from '../tarifa-delete-dialog/tarifa-delete-dialog.component';
import { Tarifa } from '../tarifa';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tarifa-table',
  templateUrl: './tarifa-table.component.html',
  styleUrls: ['./tarifa-table.component.css']
})
export class TarifaTableComponent implements OnInit, OnDestroy {

  public tabledata: Tarifa[] = [];
  public getTarifaSub: Subscription;
  displayedColumns: string[] = ['subgrupo','modalidade','classe','id','iddistribuidora','posto','tusd','dtusd','dte','te'];

  public my_Class = 'color=primary';

  dataSource: MatTableDataSource<Tarifa>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private tarifaDataService: TarifaDataService,
  ) {

  }

  ngOnInit() {
    this.getTarifas(); // wir packen nicht alles unter ngOnInit
  }
  ngOnDestroy() {
    if (this.getTarifaSub) {
      this.getTarifaSub.unsubscribe();
    }
  }
  getTarifas() {
    this.getTarifaSub = this.tarifaDataService.getAllTarifas()
      .subscribe((tabledata) => { // hier könnte auch eine anderer neme vom typ Tarifa[] = [] stehen
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
    const title = isNew ? 'Add tarifa' : 'Update tarifa';
    const dialogRef: MatDialogRef<any> = this.dialog.open(TarifaDialogComponent, {
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
          this.tarifaDataService.addTarifa(result)
            .subscribe((newProd) => {
              this.tabledata = this.tabledata.concat(newProd);
              this.dataSource.data = this.tabledata;
            });
        } else {
          this.tarifaDataService.updateTarifa(data.id, result)
            .subscribe((updatedTarifa) => {
              const foundIndex = this.tabledata.findIndex(x => x.id === data.id);
              Object.assign(this.tabledata[foundIndex] , updatedTarifa);
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
    const dialogRef = this.dialog.open(TarifaDeleteDialogComponent, {
      width: '400px',
      disableClose: true,
      data: {title: title, message: message}
    });
    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          this.tarifaDataService.removeItem(row.id)
            .subscribe((_) => {
              this.tabledata = this.tabledata.filter((d) => d.id !== row.id);
              this.dataSource.data = this.tabledata;
            });
        }
      });
  }

}

