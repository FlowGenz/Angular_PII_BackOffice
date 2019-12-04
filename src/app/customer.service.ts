import { Injectable } from '@angular/core';
import { Customer } from 'src/app/model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerList: Array<Customer>;

  constructor() { 
    let customer1 : Customer = <Customer> { username: "warrior5060", password: "MyPassword", firstName: "Joris", 
                                            lastName: "Zonowatnik", email: "zonoj@hotmail.com", phoneNumber: "0499 15 36 92", address: "Rue des somnalant, 30", 
                                            loyaltyPoints: 150};

    let customer2 : Customer = <Customer> { username: "Xx_Nightware_xX", password: "HisPassword", firstName: "Florian", 
                                            lastName: "Janssens", email: "jansf@hotmail.com", phoneNumber: "0499 67 39 23", address: "Rue de la plèbe, 30", 
                                            loyaltyPoints: 30};

    this.customerList = new Array<Customer>();                                
    this.customerList.push(customer1); 
    this.customerList.push(customer2);
  }

  getAll() : Array<Customer>{
    return this.customerList;
  }
}
