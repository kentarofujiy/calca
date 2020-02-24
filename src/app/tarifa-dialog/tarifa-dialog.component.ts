import { Component, OnInit , Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tarifa-dialog',
  templateUrl: './tarifa-dialog.component.html',
  styleUrls: ['./tarifa-dialog.component.css']
})
export class TarifaDialogComponent implements OnInit {
  public tarifaForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public dialogRef: MatDialogRef<TarifaDialogComponent>,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildItemForm(this.data.payload);
  }
  buildItemForm(tarifa) {
    this.tarifaForm = this.fb.group({
      id: [tarifa.id || ''],
      subgrupo: [tarifa.subgrupo || ''],
      modalidade: [tarifa.modalidade || ''],
      classe: [tarifa.classe || ''],
      iddistribuidora: [tarifa.iddistribuidora || ''],
      posto: [tarifa.posto || ''],
      tusd: [tarifa.tusd || ''],
      dtusd: [tarifa.dtusd || ''],
      dte: [tarifa.dte || ''],
      te: [tarifa.te || ''],
    });
  }

  submit() {
    this.dialogRef.close(this.tarifaForm.value);
  }
}
