export class Distribuidora {
  id: number;
nome: string;
icms: string;
subgrupo: string;
modalidade: string;
classe: string;
posto: string;
tusddemanda: string;
tusdenergia: string;
teenergia: string;


  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
