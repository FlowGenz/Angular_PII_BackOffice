import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PartnerService, DressService, CustomerService } from '../api/services';
import { DressDTO, PartnerDTO, CustomerDTO } from '../api/models';
import { NotificationBarService } from '../notification-bar.service';

@Component({
  selector: 'app-dress-form',
  templateUrl: './dress-form.component.html',
  styleUrls: ['./dress-form.component.css']
})
export class DressFormComponent implements OnInit, OnDestroy {

  private dress: DressDTO;
  private partners: PartnerDTO[];
  private customers: CustomerDTO[];
  private dressForm = this.formBuilder.group({
    available: ['', Validators.required],
    id: [{value: '', disabled : true}],
    description: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(200)])],
    price: ['', Validators.compose([Validators.required, Validators.min(0), Validators.max(9999.99)])],
    size: ['', Validators.required],
    dressName: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50)])],
    dateBeginAvailable: ['', Validators.required],
    dateEndAvailable: [''],
    partnerId: ['', Validators.required],
    userId: [''/*, Validators.required*/],
    partnerName: [''],
    urlImage: ['', Validators.required]
  });

  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private customerService: CustomerService, private partnerService: PartnerService, private dressService: DressService, private notificationBarService: NotificationBarService) { }

  ngOnInit() {
    this.partnerService.getPartner().subscribe(
      result => {
        this.partners = result;
      },
      error => {
        //this.notificationBarService.openNotificationBar(error)
      }
    )

    this.customerService.getCustomer().subscribe(
      result => {
        this.customers = result;
      },
      error => {
        //this.notificationBarService.openNotificationBar(error)
      }
    )

    if (this.dressService.getDressIdEdited() != null) {
      this.dressService.getDressId(this.dressService.getDressIdEdited()).subscribe(
        result => {
          this.dressForm.patchValue(result);
        },
        error => {
          //this.notificationBarService.openNotificationBar(error)
        });
      console.log(this.dress);
    }
  }

  ngOnDestroy() {
    this.dressService.setDressIdEdited(null);
  }

  submitForm() {

    this.dress = this.dressForm.value;

    if (this.dressService.getDressIdEdited() != null) {
      this.dressService.putDress(this.dress).subscribe(
        result => {
          this.dressService.setDressIdEdited(null);
          this.router.navigate(['/dressList']);
      },
      error => {
        //this.notificationBarService.openNotificationBar(error)
      })
    } else {
//console.log(this.dress);
      this.dressService.postDress(this.dress).subscribe(
        result => {
          this.dressService.setDressIdEdited(null);
          this.router.navigate(['/dressList']);
        },
        error => {
          //this.notificationBarService.openNotificationBar(error)
      })
    }
  }

}
