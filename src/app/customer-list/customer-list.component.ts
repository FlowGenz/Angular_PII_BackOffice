import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from 'src/app/api/services/customer.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import {SelectionModel} from '@angular/cdk/collections';
import { CustomerDTO } from '../api/models';
import { NotificationBarService } from '../notification-bar.service';
import { BehaviorSubject } from 'rxjs';

const LABEL_CUSTOMER_PAGINATOR: string = "Nombre de clients par page :";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})

/*Il faut plus tard voir pour reduire et centralisé la création de l'HTML pour les listes*/

export class CustomerListComponent implements OnInit {

  displayedColumns: string[] = ['select', 'id', 'username',/*'customerPassword',*/ 'firstName', 'lastName', 'email',
                                'phoneNumber', 'customerAddress', 'loyaltyPoints'];

  displayedColumnsBis: string[][] = [
                                      ['id', "ID"], 
                                      ['username', "Nom d'utilisateur"], 
                                      //['customerPassword', 'Mot de passe'],  
                                      ['firstName', 'Prénom'], 
                                      ['lastName', 'Nom'],
                                      ['email', 'Adresse mail'], 
                                      ['phoneNumber', 'Numero de téléphone'],
                                      ['customerAddress', 'Adresse'], 
                                      ['loyaltyPoints', 'Points de fidelite']
                                    ];

  dataSource: MatTableDataSource<CustomerDTO>;

  selection = new SelectionModel<CustomerDTO>(false, []);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private service: CustomerService, private notificationBarService: NotificationBarService) { }

  ngOnInit() {
    this.service.getCustomer().subscribe(
      result => { 
        this.dataSource = new MatTableDataSource(result);
        this.paginator._intl.itemsPerPageLabel = LABEL_CUSTOMER_PAGINATOR;
        this.dataSource.paginator = this.paginator;
      },
      //error => this.notificationBarService.openNotificationBar(error)
      );
  }

  deleteCustomer() {
    if (this.rowChecked) {

      this.service.deleteCustomerCustomerId(this.getCustomerSelected().id).subscribe(
        result =>
        {
          console.log(result);
          this.ngOnInit();
        },
        //error => this.notificationBarService.openNotificationBar(error)
      );
    }
  }

  editCustomer() {
    if (this.rowChecked) {
      this.service.setCustomerEditedUsername(this.getCustomerSelected().username);
    }
  }


  applyFilter(filterValue: String){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: CustomerDTO): string {
    if (row) 
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row}`;
  }

  fisrtColumn( columnName:String ):boolean {
    return columnName == 'select';
  }

  getCustomerSelected() : CustomerDTO{
    return this.selection.selected[0];
  }

  public get rowChecked(): boolean {
    return !this.selection.isEmpty();
  }
}