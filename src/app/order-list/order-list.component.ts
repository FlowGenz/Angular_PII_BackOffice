import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Order } from 'src/app/model/Order';
import { OrderService } from 'src/app/order.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'dateFacturation', 'dateLivraison', 'adresseFacturation', 'adresseLivraison',
                                'estValide', 'clientId'];
  dataSource: Array<Order>;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private service: OrderService) { }

  ngOnInit() {
    this.dataSource = this.service.getAll();
  }

}
