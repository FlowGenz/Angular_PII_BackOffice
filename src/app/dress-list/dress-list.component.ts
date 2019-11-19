import { Component, OnInit, ViewChild } from '@angular/core';
import { Dress } from '../model/Dress';
import { DressService } from '../dress.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-dress-list',
  templateUrl: './dress-list.component.html',
  styleUrls: ['./dress-list.component.css']
})
export class DressListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nom', 'description', 'disponibilite', 'dateDebutDisponibilite',
                                'dateFinDisponibilite', 'partenaireId'];
  dataSource: Array<Dress>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private service: DressService) { }

  ngOnInit() {
    this.dataSource = this.service.getAll();
  }
}
