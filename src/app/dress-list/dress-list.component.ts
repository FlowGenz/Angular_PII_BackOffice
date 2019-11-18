import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Dress } from '../model/Dress';
import { DressService } from '../dress.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-dress-list',
  templateUrl: './dress-list.component.html',
  styleUrls: ['./dress-list.component.css']
})
export class DressListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nom', 'description'];

  listDress: Array<Dress>;
  dataSource = this.listDress;
  

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private service: DressService) { }

  ngOnInit() {
    this.listDress = this.service.getAll();
  }

}
