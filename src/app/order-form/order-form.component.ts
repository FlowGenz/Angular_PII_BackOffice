import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Order } from '../model/Order';
import { Customer } from '../model/Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  private customers: Customer[] = [];
  private order: Order;
  private orderForm = this.formBuilder.group({
    id: [''],
    billingDate: ['', Validators.required],
    deliveryDate: ['', Validators.required],
    billingAddress: ['', Validators.required],
    deliveryAddress: ['', Validators.required],
    isValid: ['', Validators.required],
    customerId: ['', Validators.required]
  });

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private service: CustomerService) { }

  ngOnInit() {
    
  }

  submitForm() {
    this.order = this.orderForm.value;
    console.log(this.order);
  }

}
