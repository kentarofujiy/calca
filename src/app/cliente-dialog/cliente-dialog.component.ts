import { Component, OnInit , Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cliente-dialog',
  templateUrl: './cliente-dialog.component.html',
  styleUrls: ['./cliente-dialog.component.css']
})
export class ClienteDialogComponent implements OnInit {
  public clienteForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public dialogRef: MatDialogRef<ClienteDialogComponent>,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildItemForm(this.data.payload);
  }
  buildItemForm(cliente) {
    this.clienteForm = this.fb.group({
      id: [cliente.id || ''],
    razao: [cliente.   razao || ''],
	cnpj: [cliente.cnpj || ''],
	cidade: [cliente.cidade || ''],
	estado: [cliente.estado || ''],
	grupo: [cliente.grupo || ''],
	classe: [cliente.classe || ''],
	modalidade: [cliente.modalidade || ''],
	potencia: [cliente.potencia || ''],
	horasprodutivasduteis: [cliente.horasprodutivasduteis || ''],
	horasprodutivassabados: [cliente.horasprodutivassabados || ''],
	horasprodutivasdomingos: [cliente.horasprodutivasdomingos || ''],
	posto: [cliente.posto || ''],
	subgrupo: [cliente.subgrupo || ''],
    });
  }

  submit() {
    this.dialogRef.close(this.clienteForm.value);
  }
}
