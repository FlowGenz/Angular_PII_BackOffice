import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { DressDTO } from '../api/models';
import { DressService } from '../api/services';

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


  //ici tu as ajoute le nom de l'attribut de la robe
  displayedColumns: string[] = ['select', 'id', 'name', 'availability', 'startAvailabilityDate',
                                'endAvailabilityDate', 'partnerId'];
  //ici tu as ajoute le nom de l'attribut de la robe et à droite le nom du titre que tu veux a t'as colonne
  displayedColumnsBis: string[][] = [
                                      ['id', 'id'], 
                                      ['name', 'nom'], 
                                      //['description', 'description'], 
                                      ['availability', 'disponibilite'], 
                                      ['startAvailabilityDate', 'Date de debut disponibilite'],
                                      ['endAvailabilityDate', 'Date de fin disponibilité'], 
                                      ['partnerId', 'partenaire id']
                                    ];

  dataSource: MatTableDataSource<DressDTO>;

  selection = new SelectionModel<DressDTO>(false, []);

  

  expandedElement: DressDTO | null;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private service: DressService) { }

  ngOnInit() {

    this.service.getDress().subscribe(
      result => { 
        this.dataSource = new MatTableDataSource(result);
        this.paginator._intl.itemsPerPageLabel = LABEL_RANGE_DRESS_PAGINATOR;
        this.dataSource.paginator = this.paginator;
      },
      error => console.log("Error has occured while getting dresses", error),
      () => console.log("Loading dresses completed !")
      );

  }

  deleteDress() {
    if (this.rowChecked) {

      this.service.deleteDressDressId(this.getDressSelected().id).subscribe(
        result =>
        {
          console.log(result);
          this.ngOnInit();
        },
        error => console.log("Erreur suppression robe!"),
        () => console.log("Suppression terminée")
      );
    }
  }

  applyFilter(filterValue: String){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: DressDTO): string {
    if (row) 
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row}`;
  }

  getDressSelected() : DressDTO{
    return this.selection.selected[0];
  }

  public get rowChecked(): boolean {
    return !this.selection.isEmpty();
  }
}