import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-cenario-delete-dialog',
  templateUrl: './cenario-delete-dialog.component.html',
  styleUrls: ['./cenario-delete-dialog.component.css']
})
export class CenarioDeleteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CenarioDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

}
