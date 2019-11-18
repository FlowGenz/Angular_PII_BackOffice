import { Component, OnInit } from '@angular/core';
import { Dress } from '../model/Dress';
import { DressService } from '../dress.service';

@Component({
  selector: 'app-dress-list',
  templateUrl: './dress-list.component.html',
  styleUrls: ['./dress-list.component.css']
})
export class DressListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nom', 'description'];

  listDress: Array<Dress>;
  dataSource = this.listDress;
  

  constructor(private service: DressService) { }

  ngOnInit() {
    this.listDress = this.service.getAll();
  }

}
