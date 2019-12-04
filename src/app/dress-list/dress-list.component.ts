import { Component, OnInit, ViewChild } from '@angular/core';
import { Dress } from '../model/Dress';
import { DressService } from '../dress.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';
import {animate, state, style, transition, trigger} from '@angular/animations';

const LABEL_RANGE_DRESS_PAGINATOR: string = "Nombre de robes par page :";

@Component({
  selector: 'app-dress-list',
  templateUrl: './dress-list.component.html',
  styleUrls: ['./dress-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class DressListComponent implements OnInit {

  displayedColumns: string[] = ['select', 'id', 'name', 'description', 'availability', 'startAvailabilityDate',
                                'endAvailabilityDate', 'partnerId'];

  displayedColumnsBis: string[][] = [
                                      ['select', 'select'],
                                      ['id', 'id'], 
                                      ['name', 'nom'], 
                                      ['description', 'description'], 
                                      ['availability', 'disponibilite'], 
                                      ['startAvailabilityDate', 'Date de debut disponibilite'],
                                      ['endAvailabilityDate', 'Date de fin disponibilité'], 
                                      ['partnerId', 'partenaire id']
                                    ];

  dataSource: MatTableDataSource<Dress>;

  selection = new SelectionModel<Dress>(false, []);

  

  expandedElement: Dress | null;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private service: DressService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.service.getAll());
    this.paginator._intl.itemsPerPageLabel = LABEL_RANGE_DRESS_PAGINATOR;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: String){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Dress): string {
    if (row) 
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row}`;
  }

  getDressSelected() : Dress{
    return this.selection.selected.values[0].id;
  }
}