import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehicleComponent } from './add-vehicle.component';
import { AllVehiclesComponent } from './all-vehicles/all-vehicles.component';

const routes: Routes = [
  { path: 'add-vehicle', component: AddVehicleComponent },
  { path: 'all-vehicles', component: AllVehiclesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddVehicleRoutingModule { }
