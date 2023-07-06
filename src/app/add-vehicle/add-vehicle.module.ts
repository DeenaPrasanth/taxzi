import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddVehicleRoutingModule } from './add-vehicle-routing.module';
import { AddVehicleComponent } from './add-vehicle.component';
import { AllVehiclesComponent } from './all-vehicles/all-vehicles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddVehicleComponent,
    AllVehiclesComponent
  ],
  imports: [
    CommonModule,
    AddVehicleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AddVehicleComponent,
    AllVehiclesComponent
  ],
})
export class AddVehicleModule { }
