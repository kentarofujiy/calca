import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialogRef, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { CenarioDataService } from '../cenario-data.service';
import { CenarioDialogComponent } from '../cenario-dialog/cenario-dialog.component';
import { CenarioDeleteDialogComponent } from '../cenario-delete-dialog/cenario-delete-dialog.component';
import { Cenario } from '../cenario';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cenario-table',
  templateUrl: './cenario-table.component.html',
  styleUrls: ['./cenario-table.component.css']
})
export class CenarioTableComponent implements OnInit, OnDestroy {

  public tabledata: Cenario[] = [];
  public getCenarioSub: Subscription;
  displayedColumns: string[] = [   'id','lancamento','consumoponta','consumofponta','consumointerm'
];

  public my_Class = 'color=primary';

  dataSource: MatTableDataSource<Cenario>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private cenarioDataService: CenarioDataService,
  ) {

  }

  ngOnInit() {
    this.getCenarios(); // wir packen nicht alles unter ngOnInit
  }
  ngOnDestroy() {
    if (this.getCenarioSub) {
      this.getCenarioSub.unsubscribe();
    }
  }
  getCenarios() {
    this.getCenarioSub = this.cenarioDataService.getAllCenarios()
      .subscribe((tabledata) => { // hier könnte auch eine anderer neme vom typ Cenario[] = [] stehen
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
    const title = isNew ? 'Add cenario' : 'Update cenario';
    const dialogRef: MatDialogRef<any> = this.dialog.open(CenarioDialogComponent, {
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
          this.cenarioDataService.addCenario(result)
            .subscribe((newProd) => {
              this.tabledata = this.tabledata.concat(newProd);
              this.dataSource.data = this.tabledata;
            });
        } else {
          this.cenarioDataService.updateCenario(data.id, result)
            .subscribe((updatedCenario) => {
              const foundIndex = this.tabledata.findIndex(x => x.id === data.id);
              Object.assign(this.tabledata[foundIndex] , updatedCenario);
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
    const dialogRef = this.dialog.open(CenarioDeleteDialogComponent, {
      width: '400px',
      disableClose: true,
      data: {title: title, message: message}
    });
    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          this.cenarioDataService.removeItem(row.id)
            .subscribe((_) => {
              this.tabledata = this.tabledata.filter((d) => d.id !== row.id);
              this.dataSource.data = this.tabledata;
            });
        }
      });
  }

}

