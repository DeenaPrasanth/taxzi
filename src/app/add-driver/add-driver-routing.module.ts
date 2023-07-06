import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDriversComponent } from './all-drivers/all-drivers.component';
import { AddDriverComponent } from './add-driver.component';

const routes: Routes = [
  { path: 'add-driver', component: AddDriverComponent },
  { path: 'all-drivers', component: AllDriversComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddDriverRoutingModule { }
