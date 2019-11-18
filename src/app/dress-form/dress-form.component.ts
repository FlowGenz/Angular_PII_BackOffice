import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dress-form',
  templateUrl: './dress-form.component.html',
  styleUrls: ['./dress-form.component.css']
})
export class DressFormComponent implements OnInit {

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
