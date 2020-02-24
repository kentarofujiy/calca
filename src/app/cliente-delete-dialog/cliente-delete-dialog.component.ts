import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-cliente-delete-dialog',
  templateUrl: './cliente-delete-dialog.component.html',
  styleUrls: ['./cliente-delete-dialog.component.css']
})
export class ClienteDeleteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ClienteDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

}
