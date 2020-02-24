import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-distribuidora-delete-dialog',
  templateUrl: './distribuidora-delete-dialog.component.html',
  styleUrls: ['./distribuidora-delete-dialog.component.css']
})
export class DistribuidoraDeleteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DistribuidoraDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

}
