import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../api/services';
import { CustomerDTO } from '../api/models';
import { NotificationBarService } from '../notification-bar.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  private customer: CustomerDTO;
  private customerForm = this.formBuilder.group({
    id: [{value: '', disabled: true}],
    firstName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
    lastName: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50)])],
    username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
    customerPassword: ['', Validators.compose([Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,60}$")])],
    email: ['', Validators.compose([Validators.required, Validators.maxLength(256), Validators.email])],
    phoneNumber: ['', Validators.pattern("[0-9]{9}")],
    customerAddress: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(200)])],
    loyaltyPoints: ['', Validators.compose([Validators.required, Validators.min(0)])]
  });

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private customerService: CustomerService, private router: Router, private notificationBarService: NotificationBarService) { }

  ngOnInit() {
    if (this.customerService.getCustomerEditedUsername() != null) {
      this.customerService.getCustomerUsername(this.customerService.getCustomerEditedUsername()).subscribe(
        result => {
          this.customer = result;
        },
        error => {
          //this.notificationBarService.openNotificationBar(error)
        });
      console.log(this.customer);
    }
  }

  submitForm() {
    this.customer = this.customerForm.value;
    console.log(this.customer);
    this.customerService.postCustomer(this.customer).subscribe(
      result => {
        this.router.navigate(['/customerList']);
      },
      error => {
        //this.notificationBarService.openNotificationBar(error)
      }
    )
  }

}
