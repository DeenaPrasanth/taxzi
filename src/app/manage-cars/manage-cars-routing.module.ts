import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarsComponent } from './add-cars/add-cars/add-cars.component';
import { AllCarsComponent } from './all-cars/all-cars/all-cars.component';

const routes: Routes = [
  { path:'add-Cars', component:AddCarsComponent },
  { path:'all-Cars', component:AllCarsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageCarsRoutingModule { }
