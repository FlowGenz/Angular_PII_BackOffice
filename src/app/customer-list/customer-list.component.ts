import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/Customer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  private customer: Customer;

  constructor(private route: ActivatedRoute) {
    //this.customer = route.snapshot.params;
  }

  ngOnInit() {
  }

}
