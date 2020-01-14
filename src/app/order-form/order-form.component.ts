import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DressOrderDTO } from '../api/models';
import { OrderService } from '../api/services';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  private order: DressOrderDTO;
  private orderForm = this.formBuilder.group({
    id: [''],
    billingDate: ['', Validators.required],
    deliveryDate: ['', Validators.required],
    billingAddress: ['', Validators.required],
    deliveryAddress: ['', Validators.required],
    isValid: ['', Validators.required],
    customerId: ['', Validators.required]
  });

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private orderService: OrderService, private router: Router) { }

  ngOnInit() {
  
  }

  submitForm() {
    this.order = this.orderForm.value;
    console.log(this.order);
  }

}
