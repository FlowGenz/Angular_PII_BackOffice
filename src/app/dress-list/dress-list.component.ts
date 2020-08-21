import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { DressDTO } from '../api/models';
import { DressService } from '../api/services';
import { NotificationBarService } from '../notification-bar.service';

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
  displayedColumns: string[] = ['select', 'id', 'dressName', 'available', 'dateBeginAvailable',
                                'dateEndAvailable', 'partnerId'];
  //ici tu as ajoute le nom de l'attribut de la robe et à droite le nom du titre que tu veux a t'as colonne
  displayedColumnsBis: string[][] = [
                                      ['id', 'ID'], 
                                      ['dressName', 'Nom'], 
                                      //['description', 'description'], 
                                      ['available', 'Disponibilité'], 
                                      ['dateBeginAvailable', 'Date de debut disponibilite'],
                                      ['dateEndAvailable', 'Date de fin disponibilité'], 
                                      ['partnerId', 'ID Partenaire']
                                    ];

  dataSource: MatTableDataSource<DressDTO>;

  selection = new SelectionModel<DressDTO>(false, []);

  private indexMax: number;
  private pageIndex: number;

  expandedElement: DressDTO | null;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private service: DressService, private notificationBarService: NotificationBarService) { }

  ngOnInit() {

    this.service.getDress().subscribe(
      result => { 
        this.dataSource = new MatTableDataSource(result);
        this.paginator._intl.itemsPerPageLabel = LABEL_RANGE_DRESS_PAGINATOR;
        this.dataSource.paginator = this.paginator;
      },
      error => this.notificationBarService.openNotificationBar(error)
      );

      this.indexMax = 0;
      this.pageIndex = this.indexMax;

  }

  ngAfterViewInit(){
    /*this.paginator._intl.itemsPerPageLabel = LABEL_RANGE_DRESS_PAGINATOR;
    this.getData();*/
  }

  getData() {
    this.service.getDressPageIndexPageSize({pageIndex: this.pageIndex, pageSize: this.paginator.pageSize}).subscribe(
      result => {
        this.indexMax = result.totalPages;
        this.setDataSource(result.dressesDTO);
      });
  }

  setDataSource(result) {
    this.dataSource = new MatTableDataSource(result);
    this.paginator._intl.itemsPerPageLabel = LABEL_RANGE_DRESS_PAGINATOR;
    this.dataSource.paginator = this.paginator;
  }

  setPageIndexPlus(){
    if(this.pageIndex < this.indexMax){
      this.pageIndex++;
      this.getData();
    }
  }
  setPageIndexMinus(){
    if(this.pageIndex > 0){
      this.pageIndex--;
      this.getData();
    }
  }

  public resetIndex = () :void => {
    this.pageIndex = 0;
    this.getData();
  }

  isNotLastIndex(index: number) : boolean {
    return index < this.displayedColumnsBis.length-1;
  }

  loadDress() {
    if (this.rowChecked)
      this.service.setDressIdEdited(this.getDressSelected().id);
  }

  deleteDress() {
    if (this.rowChecked) {

      this.service.deleteDressDressId(this.getDressSelected().id).subscribe(
        result =>
        {
          this.ngOnInit();
        }
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