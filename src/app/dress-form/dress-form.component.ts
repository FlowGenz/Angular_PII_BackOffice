import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Dress } from '../model/Dress';
import { PartnerService } from '../partner.service';

@Component({
  selector: 'app-dress-form',
  templateUrl: './dress-form.component.html',
  styleUrls: ['./dress-form.component.css']
})
export class DressFormComponent implements OnInit {

  private dress: Dress;
  private dressForm = this.formBuilder.group({
    id: [''],
    name: ['', Validators.required, Validators.minLength(2), Validators.maxLength(50)],
    description: ['', Validators.required, Validators.minLength(2), Validators.maxLength(200)],
    price: ['', Validators.required, Validators.min(0), Validators.max(9999.99)],
    available: ['', Validators.required],
    startAvailableDate: ['', Validators.required],
    endAvailableDate: [''],
    partnerId: ['', Validators.required]
  });

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private service: PartnerService) { }

  ngOnInit() {
  }

  submitForm() {
    this.dress = this.dressForm.value;
    console.log(this.dress);
  }

}
