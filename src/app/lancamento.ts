export class Lancamento {
  id: number;
  dist: string;
  razao: string;
  cnpj: string;
  login: string;
  data: string;
  grupo: string;
  consumointerm: string;
  consumofponta: string;
  custoponta: string;
  custofponta: string;
  custointerm: string;
  idcliente: string;
  mes: string;
  ano: string;
  tstributo: string;
  tctributo: string;
  status: string;
  consumoponta: string;
  potencia: string;
  consumotusd: string;
  consumote: string;
  consumooutros: string;
  custobponta: string;
  custobfponta: string;
  custobinterm: string;
  soma: string;
  totalctributosbponta: string;
  totalctributosbfponta: string;
  totalctributosbinterm: string;


  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
