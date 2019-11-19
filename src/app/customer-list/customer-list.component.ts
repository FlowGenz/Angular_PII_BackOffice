import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/Customer';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})

/*Il faut plus tard voir pour reduire et centralisé la création de l'HTML pour les listes*/

export class CustomerListComponent implements OnInit {

  displayedColumns: string[] = ['username', 'password', 'nom', 'prenom', 'adresseMail',
                                'numeroTelephone', 'adresse', 'pointsFidelite'];

  dataSource: Array<Customer>;

  constructor(private service: CustomerService) { }

  ngOnInit() {
    this.dataSource = this.service.getAll();
  }
}