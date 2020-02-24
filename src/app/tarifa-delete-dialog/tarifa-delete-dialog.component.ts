import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-tarifa-delete-dialog',
  templateUrl: './tarifa-delete-dialog.component.html',
  styleUrls: ['./tarifa-delete-dialog.component.css']
})
export class TarifaDeleteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<TarifaDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

}
