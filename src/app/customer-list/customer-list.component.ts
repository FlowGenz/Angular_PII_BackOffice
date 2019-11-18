import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/Customer';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  private customer: Customer;
  private customerForm = this.formBuilder.group({
    id: [''],
    username: [''],
    password: [''],
    prenom: [''],
    nom: [''],
    adresseMail: [''],
    numeroTelephone: [''],
    adresse: [''],
    pointsFidelite: ['']
  })


  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) {
    
  }

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
}