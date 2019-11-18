import { Injectable } from '@angular/core';
import { Dress } from 'src/app/model/Dress';

@Injectable({
  providedIn: 'root'
})
export class DressService {

  dressList: Array<Dress>;

  constructor() { 
    let dress1 : Dress = <Dress> { id: 1, nom: "bleu", description: "robe bleu", prix: 1000,
                                  disponibilite: false,  dateDebutDisponibilite: null, dateFinDisponibilite: null,
                                  partenaireId: 124567};
    let dress2 : Dress = <Dress> { id: 2, nom: "rouge", description: "robe rouge", prix: 1300,
                                  disponibilite: false,  dateDebutDisponibilite: null, dateFinDisponibilite: null,
                                  partenaireId: 87567};
    this.dressList = new Array<Dress>();                                
    this.dressList.push(dress1); 
    this.dressList.push(dress2);
  }

  getAll() : Array<Dress>{
    return this.dressList;
  }
}
