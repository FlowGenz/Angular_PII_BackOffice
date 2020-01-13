import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/Customer';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  private customer: Customer;
  private customerForm = this.formBuilder.group({
    id: [''],
    username: ['', Validators.required, Validators.compose([Validators.minLength(3), Validators.maxLength(50)])],
    password: ['', Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,60}$")],
    firstName: ['', Validators.required, Validators.compose([Validators.minLength(3), Validators.maxLength(50)])],
    lastName: ['', Validators.required, Validators.compose([Validators.minLength(2), Validators.maxLength(50)])],
    mailAddress: ['', Validators.required, Validators.compose([Validators.maxLength(256), Validators.email])],
    phoneNumber: ['', Validators.pattern("[0-9]{9}")],
    address: ['', Validators.required, Validators.compose([Validators.minLength(3), Validators.maxLength(200)])],
    fidelityPoints: ['', Validators.required, Validators.min(0)]
  });

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.customer = new Customer(
      parseInt(this.route.snapshot.paramMap.get("id")),
      this.route.snapshot.paramMap.get("username"),
      this.route.snapshot.paramMap.get("password"),
      this.route.snapshot.paramMap.get("prenom"),
      this.route.snapshot.paramMap.get("nom"),
      this.route.snapshot.paramMap.get("adresseMail"),
      this.route.snapshot.paramMap.get("numeroTelephone"),
      this.route.snapshot.paramMap.get("adresse"),
      parseInt(this.route.snapshot.paramMap.get("pointsFidelite")));
  }

  submitForm() {
    this.customer = this.customerForm.value;
    console.log(this.customer);
  }

}
