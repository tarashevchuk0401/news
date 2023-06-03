import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  exports: [
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [],
  imports: [
    CommonModule
  ],
 

})
export class MaterialModule { }
