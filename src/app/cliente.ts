export class Cliente {
  id: number;
  razao: string;
	cnpj: string;
	cidade: string;
	estado: string;
	grupo: string;
	classe: string;
	modalidade: string;
	potencia: string;
	horasprodutivasduteis: string;
	horasprodutivassabados: string;
	horasprodutivasdomingos: string;
	posto: string;
	subgrupo: string;


  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
