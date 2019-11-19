import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from '../model/Customer';
import { CustomerService } from 'src/app/customer.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})

/*Il faut plus tard voir pour reduire et centralisé la création de l'HTML pour les listes*/

export class CustomerListComponent implements OnInit {

  displayedColumns: string[] = ['username', 'password', 'prenom', 'nom', 'adresseMail',
                                'numeroTelephone', 'adresse', 'pointsFidelite'];

  dataSource: MatTableDataSource<Customer>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private service: CustomerService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.service.getAll());
  }


  applyFilter(filterValue: String){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}