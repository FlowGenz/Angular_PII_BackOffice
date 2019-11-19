import { Injectable } from '@angular/core';
import { Customer } from 'src/app/model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerList: Array<Customer>;

  constructor() { 
    let customer1 : Customer = <Customer> { username: "warrior5060", password: "MyPassword", prenom: "Joris", 
                                            nom: "Zonowatnik", adresseMail: "zonoj@hotmail.com", numeroTelephone: "0499 15 36 92", adresse: "Rue des somnalant, 30", 
                                            pointsFidelite: 150};

    let customer2 : Customer = <Customer> { username: "Xx_Nightware_xX", password: "HisPassword", prenom: "Florian", 
                                            nom: "Janssens", adresseMail: "jansf@hotmail.com", numeroTelephone: "0499 67 39 23", adresse: "Rue de la plèbe, 30", 
                                            pointsFidelite: 30};

    this.customerList = new Array<Customer>();                                
    this.customerList.push(customer1); 
    this.customerList.push(customer2);
  }

  getAll() : Array<Customer>{
    return this.customerList;
  }
}
