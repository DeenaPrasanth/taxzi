import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {MatIconModule} from '@angular/material/icon';
import { UserComponent } from './user/user.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDriverModule } from './add-driver/add-driver.module';
import { AddVehicleModule } from './add-vehicle/add-vehicle.module';
import { ManageCarsModule } from './manage-cars/manage-cars.module';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddDriverModule,
    FormsModule,
    ReactiveFormsModule,
    AddVehicleModule,
    ManageCarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
