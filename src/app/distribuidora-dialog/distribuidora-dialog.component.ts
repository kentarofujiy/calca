import { Component, OnInit , Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-distribuidora-dialog',
  templateUrl: './distribuidora-dialog.component.html',
  styleUrls: ['./distribuidora-dialog.component.css']
})
export class DistribuidoraDialogComponent implements OnInit {
  public distribuidoraForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public dialogRef: MatDialogRef<DistribuidoraDialogComponent>,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildItemForm(this.data.payload);
  }
  buildItemForm(distribuidora) {
    this.distribuidoraForm = this.fb.group({
      id: [distribuidora.id || ''],
      nome: [distribuidora.nome || ''],
      icms: [distribuidora.icms || ''],
      subgrupo: [distribuidora.subgrupo || ''],
      modalidade: [distribuidora.modalidade || ''],
      classe: [distribuidora.classe || ''],
      posto: [distribuidora.posto || ''],
      tusddemanda: [distribuidora.tusddemanda || ''],
      tusdenergia: [distribuidora.tusdenergia || ''],
      teenergia: [distribuidora.teenergia || ''],
      
    });
  }

  submit() {
    this.dialogRef.close(this.distribuidoraForm.value);
  }
}
