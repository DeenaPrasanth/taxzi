import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDriverRoutingModule } from './add-driver-routing.module';
import { AddDriverComponent } from '../add-driver/add-driver.component';
import { AllDriversComponent } from './all-drivers/all-drivers.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddDriverComponent,
    AllDriversComponent
  ],
  imports: [
    CommonModule,
    AddDriverRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    AddDriverComponent,
    AllDriversComponent
  ],
})
export class AddDriverModule { }
