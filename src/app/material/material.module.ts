import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material';
import  {MatTableModule} from '@angular/material';

const Material = [
  MatToolbarModule,
  MatButtonModule,
  MatTableModule
];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
