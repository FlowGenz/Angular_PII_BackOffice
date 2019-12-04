import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Order } from 'src/app/model/Order';
import { OrderService } from 'src/app/order.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

const LABEL_ORDER_PAGINATOR: string = "Nombre de commandes client par page :";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'billingDate', 'deliveryDate', 'billingAddress', 'deliveryAddress',
                                'isValid', 'customerId'];

  displayedColumnsBis: string[][] = [
                                      ['id', 'id'], 
                                      ['billingDate', 'Date de facturation'], 
                                      ['deliveryDate', 'Date de livraison'], 
                                      ['billingAddress', 'Adresse de facturation'], 
                                      ['deliveryAddress', 'Adresse de livraison'],
                                      ['isValid', 'est valide'], 
                                      ['customerId', 'client id']
                                    ];
  dataSource: MatTableDataSource<Order>;

  selection = new SelectionModel<Order>(false, []);
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private service: OrderService) { }


  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.service.getAll());
    this.paginator._intl.itemsPerPageLabel = LABEL_ORDER_PAGINATOR;
    this.dataSource.paginator = this.paginator;
  }


  applyFilter(filterValue: String){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Order): string {
    if (row) 
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row}`;
  }

  fisrtColumn( columnName:String ):boolean {
    return columnName == 'select';
  }

}
