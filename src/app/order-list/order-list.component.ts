import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Order } from 'src/app/model/Order';
import { OrderService } from 'src/app/order.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

const LABEL_ORDER_PAGINATOR: string = "Nombre de commandes client par page :";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  displayedColumns: string[] = ['select', 'id', 'dateFacturation', 'dateLivraison', 'adresseFacturation', 'adresseLivraison',
    'estValide', 'clientId'];

  displayedColumnsBis: string[][] = [
    ['id', 'id'],
    ['dateFacturation', 'Date de facturation'],
    ['dateLivraison', 'Date de livraison'],
    ['adresseFacturation', 'Adresse de facturation'],
    ['adresseLivraison', 'Adresse de livraison'],
    ['estValide', 'est valide'],
    ['clientId', 'client id']
  ];

  dataSource: MatTableDataSource<Order>;

  selection = new SelectionModel<Order>(false, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private service: OrderService) { }

  toggleElementSelection(element: any) {
      this.selection.toggle(element);
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.service.getAll());
    this.paginator._intl.itemsPerPageLabel = LABEL_ORDER_PAGINATOR;
    this.dataSource.paginator = this.paginator;
  }


  applyFilter(filterValue: String) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Order): string {
    if (row)
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row}`;
  }

  fisrtColumn(columnName: String): boolean {
    return columnName == 'select';
  }

  getOrderSelected(): Order {
    return this.selection.selected.values[0];
  }

  trackOrder(index: number, order: Order) {
    return index;
  }

  /*supprimerOrder() {
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
  }*/

}
