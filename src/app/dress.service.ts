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
    let dress3 : Dress = <Dress> { id: 3, nom: "bleu", description: "robe bleu", prix: 1000,
                                  disponibilite: false,  dateDebutDisponibilite: null, dateFinDisponibilite: null,
                                  partenaireId: 124567};
    let dress4 : Dress = <Dress> { id: 4, nom: "rouge", description: "robe rouge", prix: 1300,
                                  disponibilite: false,  dateDebutDisponibilite: null, dateFinDisponibilite: null,
                                  partenaireId: 87567};
    let dress5 : Dress = <Dress> { id: 5, nom: "bleu", description: "robe bleu", prix: 1000,
                                  disponibilite: false,  dateDebutDisponibilite: null, dateFinDisponibilite: null,
                                  partenaireId: 124567};
    let dress6 : Dress = <Dress> { id: 6, nom: "rouge", description: "robe rouge", prix: 1300,
                                  disponibilite: false,  dateDebutDisponibilite: null, dateFinDisponibilite: null,
                                  partenaireId: 87567};
    let dress7 : Dress = <Dress> { id: 7, nom: "bleu", description: "robe bleu", prix: 1000,
                                  disponibilite: false,  dateDebutDisponibilite: null, dateFinDisponibilite: null,
                                  partenaireId: 124567};
    let dress8 : Dress = <Dress> { id: 8, nom: "rouge", description: "robe rouge", prix: 1300,
                                  disponibilite: false,  dateDebutDisponibilite: null, dateFinDisponibilite: null,
                                  partenaireId: 87567};
    this.dressList = new Array<Dress>();                                
    this.dressList.push(dress1); 
    this.dressList.push(dress2);
    this.dressList.push(dress3);
    this.dressList.push(dress4);
    this.dressList.push(dress5);
    this.dressList.push(dress6);
    this.dressList.push(dress7);
    this.dressList.push(dress8);

  }

  getAll() : Array<Dress>{
    return this.dressList;
  }
}
