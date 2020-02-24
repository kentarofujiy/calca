import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-lancamento-delete-dialog',
  templateUrl: './lancamento-delete-dialog.component.html',
  styleUrls: ['./lancamento-delete-dialog.component.css']
})
export class LancamentoDeleteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<LancamentoDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

}
