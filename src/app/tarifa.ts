export class Tarifa {
  id: number;
  sugrupo: string;
  modalidade: string;
  classe: string;
  iddistribuidora: string;
  posto: string;
  tusd: string;
  dtusd: string;
  dte:string;
  te: string;


  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
