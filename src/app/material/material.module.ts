import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material';
import  {MatTableModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';

const Material = [
  MatToolbarModule,
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  MatDividerModule,
  MatMenuModule,
  MatIconModule,
  MatPaginatorModule
];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
