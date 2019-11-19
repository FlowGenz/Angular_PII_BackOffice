import { Injectable } from '@angular/core';
import { Order } from 'src/app/model/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderList: Array<Order>;

  constructor() { 
    let order1 : Order = <Order> { id: 1, dateFacturation: null, dateLivraison: null, adresseFacturation: "Rue de l'aveugle",
                                    adresseLivraison: "même que facturatio,", estValide: true, clientId: 1267};

    let dorder2 : Order = <Order> { id: 2, dateFacturation: null, dateLivraison: null, adresseFacturation: "Rue de l'aveugle",
                                    adresseLivraison: "", estValide: true, clientId: 124567};

    this.orderList = new Array<Order>();                                
    this.orderList.push(order1); 
    this.orderList.push(dorder2);
  }

  getAll() : Array<Order>{
    return this.orderList;
  }
}
