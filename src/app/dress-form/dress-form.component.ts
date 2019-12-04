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
    name: [''],
    description: [''],
    price: ['', Validators.min(0)],
    available: [''],
    startAvailableDate: [''],
    endAvailableDate: [''],
    partnerId: ['']
  });

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private service: PartnerService) { }

  ngOnInit() {
  }

  submitForm() {
    this.dress = this.dressForm.value;
    console.log(this.dress);
  }

}
