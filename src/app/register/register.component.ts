import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private registerForm = this.formBuilder.group({
    username: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(20)])],
    password: ['',Validators.compose([Validators.minLength(8), Validators.maxLength(20)])],
    firstName: [''],
    lastName: [''],
    mailAddress: ['', Validators.compose([Validators.required, Validators.email])],
    phoneNumber: ['', Validators.pattern("[0-9]{9}")],
    address: ['']
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
