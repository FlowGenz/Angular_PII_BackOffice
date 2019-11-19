import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Order } from 'src/app/model/Order';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nom', 'description', 'disponibilite', 'dateDebutDisponibilite',
                                'dateFinDisponibilite', 'partenaireId'];
  dataSource: Array<Order>;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private service: OrderService) { }

  ngOnInit() {
    this.dataSource = this.service.getAll();
  }

}
