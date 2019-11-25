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
    billingDate: [''],
    deliveryDate: [''],
    billingAddress: [''],
    deliveryAddress: [''],
    isValid: [''],
    customerId: ['']
  });

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private service: CustomerService) { }

  ngOnInit() {
    
    this.customers[0] = new Customer(1,"test","1234","Flo","Jans","flowgenzyt@gmail.com","+32470265668","Chez moi", 500);
  }

  submitForm() {
    this.order = this.orderForm.value;
    console.log(this.order);
  }

}
