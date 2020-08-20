import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DressOrderDTO } from '../api/models';
import { OrderService } from '../api/services';
import { NotificationBarService } from '../notification-bar.service';

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

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private orderService: OrderService, private router: Router, private notificationBarService: NotificationBarService) { }

  ngOnInit() {
    if (this.orderService.getOrderIdEdited() != null) {
      this.orderService.getOrderUsername(this.orderService.getOrderIdEdited()).subscribe(
        result => {
          this.order = result;
        },
        error => {
          this.notificationBarService.openNotificationBar(error)
        });
      console.log(this.order);
    }
  }

  submitForm() {
    this.order = this.orderForm.value;
    console.log(this.order);

    this.order = this.orderForm.value;
    console.log(this.order);
    this.orderService.postOrder(this.order).subscribe(
      result => {
        this.router.navigate(['/orderList']);
      },
      error => {
        this.notificationBarService.openNotificationBar(error)
      }
    )
  }

}
