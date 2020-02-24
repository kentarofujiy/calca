export class Cenario {
id: number;
lancamento: string;
consumoponta: string;
consumofponta: string;
consumointerm: string;


  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
