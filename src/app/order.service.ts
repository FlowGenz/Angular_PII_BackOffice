import { Injectable } from '@angular/core';
import { Order } from 'src/app/model/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderList: Array<Order>;

  constructor() { 
    let order1 : Order = <Order> { id: 1, dateFacturation: null, dateLivraison: null, adresseFacturation: "Rue de l'aveugle",
                                    adresseLivraison: "même que facturation", estValide: false, clientId: 1267};

    let dorder2 : Order = <Order> { id: 2, billingDate: null, deliveryDate: null, billingAddress: "Rue de l'aveugle",
                                    deliveryAddress: "Inconnue au bataillon", isValid: true, customerId: 124567};

    this.orderList = new Array<Order>();                                
    this.orderList.push(order1); 
    this.orderList.push(dorder2);
  }

  getAll() : Array<Order>{
    return this.orderList;
  }
}
