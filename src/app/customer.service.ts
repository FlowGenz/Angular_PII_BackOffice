import { Injectable } from '@angular/core';
import { Customer } from 'src/app/model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerList: Array<Customer>;

  constructor() { 
    let customer1 : Customer = <Customer> { id: 1, dateFacturation: null, dateLivraison: null, adresseFacturation: "Rue de l'aveugle",
                                    adresseLivraison: "même que facturatio,", estValide: true, clientId: 1267};

    let customer2 : Customer = <Customer> { id: 2, dateFacturation: null, dateLivraison: null, adresseFacturation: "Rue de l'aveugle",
                                    adresseLivraison: "", estValide: true, clientId: 124567};

    this.customerList = new Array<Customer>();                                
    this.customerList.push(customer1); 
    this.customerList.push(customer2);
  }

  getAll() : Array<Customer>{
    return this.customerList;
  }
}
