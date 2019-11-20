import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Order } from 'src/app/model/Order';
import { OrderService } from 'src/app/order.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material';

const LABEL_ORDER_PAGINATOR: string = "Nombre de commande client par page :";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'dateFacturation', 'dateLivraison', 'adresseFacturation', 'adresseLivraison',
                                'estValide', 'clientId'];
  dataSource: MatTableDataSource<Order>;

  
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

}
