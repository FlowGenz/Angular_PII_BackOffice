import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Order } from '../model/Order';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  private order: Order;
  private orderForm = this.formBuilder.group({
    id: [''],
    billingDate: [''],
    deliveryDate: [''],
    billingAddress: [''],
    deliveryAddress: [''],
    isValid: [''],
    customerId: ['']
  });

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
