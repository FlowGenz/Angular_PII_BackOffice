import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { DressOrderDTO } from '../api/models';
import { OrderService } from '../api/services';
import { NotificationBarService } from '../notification-bar.service';

const LABEL_ORDER_PAGINATOR: string = "Nombre de commandes client par page :";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  
  displayedColumns: string[] = ['select', 'id', 'billingDate', 'deliveryDate', 'billingAddress', 'deliveryAddress',
                                'isValid', 'customerId'];

  displayedColumnsBis: string[][] = [
                                      ['id', 'ID'], 
                                      ['billingDate', 'Date de facturation'], 
                                      ['deliveryDate', 'Date de livraison'], 
                                      ['billingAddress', 'Adresse de facturation'], 
                                      ['deliveryAddress', 'Adresse de livraison'],
                                      ['isValid', 'Est valide'], 
                                      ['customerId', 'ID client']
                                    ];
  dataSource: MatTableDataSource<DressOrderDTO>;

  selection = new SelectionModel<DressOrderDTO>(false, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private service: OrderService, private notificationBarService: NotificationBarService) { }

  toggleElementSelection(element: any) {
      this.selection.toggle(element);
  }

  ngOnInit() {

    this.service.getOrder().subscribe(
      result => { 
        this.dataSource = new MatTableDataSource(result);
        this.paginator._intl.itemsPerPageLabel = LABEL_ORDER_PAGINATOR;
        this.dataSource.paginator = this.paginator;
      },
      //error => this.notificationBarService.openNotificationBar(error)
      );
  }

  deleteOrder() {
    if (this.rowChecked) {

      this.service.deleteOrderDressOrderId(this.getOrderSelected().id).subscribe(
        result =>
        {
          console.log(result);
          this.ngOnInit();
        },
        //error => this.notificationBarService.openNotificationBar(error)
      );
    }
  }


  applyFilter(filterValue: String) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: DressOrderDTO): string {
    if (row)
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row}`;
  }

  fisrtColumn(columnName: String): boolean {
    return columnName == 'select';
  }

  getOrderSelected(): DressOrderDTO {
    return this.selection.selected[0];
  }

  trackOrder(index: number, order: DressOrderDTO) {
    return index;
  }

  public get rowChecked(): boolean {
    return !this.selection.isEmpty();
  }

}
