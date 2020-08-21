import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class OrderFormComponent implements OnInit, OnDestroy {

  private order: DressOrderDTO;
  private orderForm = this.formBuilder.group({
    id: [{value: '', disabled : true}],
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
      this.orderService.getOrderOrderId(this.orderService.getOrderIdEdited()).subscribe(
        result => {
          this.orderForm.patchValue(result);
        },
        error => {
          //this.notificationBarService.openNotificationBar(error)
        });
      console.log(this.order);
    }
  }

  ngOnDestroy() {
    this.orderService.setOrderIdEdited(null);
  }

  submitForm() {
    this.order = this.orderForm.value;
    console.log(this.order);

    this.order = this.orderForm.value;
    console.log(this.order);
    this.orderService.postOrder(this.order).subscribe(
      result => {
        this.orderService.setOrderIdEdited(null);
        this.router.navigate(['/orderList']);
      },
      error => {
        //this.notificationBarService.openNotificationBar(error)
      }
    )
  }

}
