import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageCarsRoutingModule } from './manage-cars-routing.module';
import { AddCarsComponent } from './add-cars/add-cars/add-cars.component';
import { AllCarsComponent } from './all-cars/all-cars/all-cars.component';


@NgModule({
  declarations: [
    AddCarsComponent,
    AllCarsComponent
  ],
  imports: [
    CommonModule,
    ManageCarsRoutingModule
  ],exports:[
    AddCarsComponent,
    AllCarsComponent
  ]
})
export class ManageCarsModule { }
