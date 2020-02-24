import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialogRef, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { DistribuidoraDataService } from '../distribuidora-data.service';
import { DistribuidoraDialogComponent } from '../distribuidora-dialog/distribuidora-dialog.component';
import { DistribuidoraDeleteDialogComponent } from '../distribuidora-delete-dialog/distribuidora-delete-dialog.component';
import { Distribuidora } from '../distribuidora';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-distribuidora-table',
  templateUrl: './distribuidora-table.component.html',
  styleUrls: ['./distribuidora-table.component.css']
})
export class DistribuidoraTableComponent implements OnInit, OnDestroy {

  public tabledata: Distribuidora[] = [];
  public getDistribuidoraSub: Subscription;
  displayedColumns: string[] = ['id','nome','icms','subgrupo','modalidade','classe','posto','tusddemanda','tusdenergia','teenergia'];

  public my_Class = 'color=primary';

  dataSource: MatTableDataSource<Distribuidora>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private distribuidoraDataService: DistribuidoraDataService,
  ) {

  }

  ngOnInit() {
    this.getDistribuidoras(); // wir packen nicht alles unter ngOnInit
  }
  ngOnDestroy() {
    if (this.getDistribuidoraSub) {
      this.getDistribuidoraSub.unsubscribe();
    }
  }
  getDistribuidoras() {
    this.getDistribuidoraSub = this.distribuidoraDataService.getAllDistribuidoras()
      .subscribe((tabledata) => { // hier könnte auch eine anderer neme vom typ Distribuidora[] = [] stehen
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
    const title = isNew ? 'Add distribuidora' : 'Update distribuidora';
    const dialogRef: MatDialogRef<any> = this.dialog.open(DistribuidoraDialogComponent, {
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
          this.distribuidoraDataService.addDistribuidora(result)
            .subscribe((newProd) => {
              this.tabledata = this.tabledata.concat(newProd);
              this.dataSource.data = this.tabledata;
            });
        } else {
          this.distribuidoraDataService.updateDistribuidora(data.id, result)
            .subscribe((updatedDistribuidora) => {
              const foundIndex = this.tabledata.findIndex(x => x.id === data.id);
              Object.assign(this.tabledata[foundIndex] , updatedDistribuidora);
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
    const dialogRef = this.dialog.open(DistribuidoraDeleteDialogComponent, {
      width: '400px',
      disableClose: true,
      data: {title: title, message: message}
    });
    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          this.distribuidoraDataService.removeItem(row.id)
            .subscribe((_) => {
              this.tabledata = this.tabledata.filter((d) => d.id !== row.id);
              this.dataSource.data = this.tabledata;
            });
        }
      });
  }

}

