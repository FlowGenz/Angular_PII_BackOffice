import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material';
import  {MatTableModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';

const Material = [
  MatToolbarModule,
  MatButtonModule,
  MatTableModule,
  MatInputModule
];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
