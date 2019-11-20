import { Component, OnInit, ViewChild } from '@angular/core';
import { Dress } from '../model/Dress';
import { DressService } from '../dress.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';

const LABEL_DRESS_PAGINATOR: string = "Nombre de robes par page :";

@Component({
  selector: 'app-dress-list',
  templateUrl: './dress-list.component.html',
  styleUrls: ['./dress-list.component.css']
})


export class DressListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nom', 'description', 'disponibilite', 'dateDebutDisponibilite',
                                'dateFinDisponibilite', 'partenaireId'];
  dataSource: MatTableDataSource<Dress>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  //selection = new SelectionModel<Dress>(false, []);

  constructor(private service: DressService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.service.getAll());
    this.paginator._intl.itemsPerPageLabel = LABEL_DRESS_PAGINATOR;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: String){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /*checkboxLabel(row?: Dress): String {
    if (row)
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row}`;
  }

  /** Whether the number of selected elements matches the total number of rows. 
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator._intl.itemsPerPageLabel = LABEL_PAGINATOR;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. 
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row 
  checkboxLabel(row?: Dress): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row}`;
  }*/
}
