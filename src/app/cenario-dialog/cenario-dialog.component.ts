import { Component, OnInit , Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cenario-dialog',
  templateUrl: './cenario-dialog.component.html',
  styleUrls: ['./cenario-dialog.component.css']
})
export class CenarioDialogComponent implements OnInit {
  public cenarioForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public dialogRef: MatDialogRef<CenarioDialogComponent>,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildItemForm(this.data.payload);
  }
  buildItemForm(cenario) {
    this.cenarioForm = this.fb.group({
      id: [cenario.id || '' ],
      lancamento: [cenario.lancamento || '' ],
      consumoponta: [cenario.consumoponta || '' ],
      consumofponta: [cenario.consumofponta || '' ],
      consumointerm: [cenario.consumointerm || '' ],
    });
  }

  submit() {
    this.dialogRef.close(this.cenarioForm.value);
  }
}
