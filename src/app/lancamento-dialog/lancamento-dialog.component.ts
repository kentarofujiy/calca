import { Component, OnInit , Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lancamento-dialog',
  templateUrl: './lancamento-dialog.component.html',
  styleUrls: ['./lancamento-dialog.component.css']
})
export class LancamentoDialogComponent implements OnInit {
  public lancamentoForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public dialogRef: MatDialogRef<LancamentoDialogComponent>,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildItemForm(this.data.payload);
  }
  buildItemForm(lancamento) {
    this.lancamentoForm = this.fb.group({
      id: [lancamento.id || '' ],
      dist: [lancamento.dist || '' ],
      razao: [lancamento.razao || '' ],
      cnpj: [lancamento.cnpj || '' ],
      login: [lancamento.login || '' ],
      data: [lancamento.data || '' ],
      grupo: [lancamento.grupo || '' ],
      consumointerm: [lancamento.consumointerm || '' ],
      consumofponta: [lancamento.consumofponta || '' ],
      custoponta: [lancamento.custoponta || '' ],
      custofponta: [lancamento.custofponta || '' ],
      custointerm: [lancamento.custointerm || '' ],
      idcliente: [lancamento.idcliente || '' ],
      mes: [lancamento.mes || '' ],
      ano: [lancamento.ano || '' ],
      tstributo: [lancamento.tstributo || '' ],
      tctributo: [lancamento.tctributo || '' ],
      status: [lancamento.status || '' ],
      consumoponta: [lancamento.consumoponta || '' ],
      potencia: [lancamento.potencia || '' ],
      consumotusd: [lancamento.consumotusd || '' ],
      consumote: [lancamento.consumote || '' ],
      consumooutros: [lancamento.consumooutros || '' ],
      custobponta: [lancamento.custobponta || '' ],
      custobfponta: [lancamento.custobfponta || '' ],
      custobinterm: [lancamento.custobinterm || '' ],
      soma: [lancamento.soma || '' ],
      totalctributosbponta: [lancamento.totalctributosbponta || '' ],
      totalctributosbfponta: [lancamento.totalctributosbfponta || '' ],
      totalctributosbinterm: [lancamento.totalctributosbinterm || '' ],
    });
  }

  submit() {
    this.dialogRef.close(this.lancamentoForm.value);
  }
}
