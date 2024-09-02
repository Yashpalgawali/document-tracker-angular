import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddvendorComponent } from './MyComponents/Vendor/addvendor/addvendor.component';
import { ViewvendorsComponent } from './MyComponents/Vendor/viewvendors/viewvendors.component';
import { AddregulationComponent } from './MyComponents/Regulation/addregulation/addregulation.component';
import { ViewregulationsComponent } from './MyComponents/Regulation/viewregulations/viewregulations.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EditvendorComponent } from './MyComponents/Vendor/editvendor/editvendor.component';
import { EditregulationComponent } from './MyComponents/Regulation/editregulation/editregulation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Import ngx-bootstrap modules
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AddregulationtypeComponent } from './MyComponents/RegulationType/addregulationtype/addregulationtype.component';
import { ViewregulationtypesComponent } from './MyComponents/RegulationType/viewregulationtypes/viewregulationtypes.component';
import { EditregulationtypeComponent } from './MyComponents/RegulationType/editregulationtype/editregulationtype.component';
import { ViewregulationsbyvendorComponent } from './MyComponents/Regulation/viewregulationsbyvendor/viewregulationsbyvendor.component';
import { AddnotificationComponent } from './MyComponents/Notification/addnotification/addnotification.component';
import { ViewnotificationsComponent } from './MyComponents/Notification/viewnotifications/viewnotifications.component';
import { EditnotificationComponent } from './MyComponents/Notification/editnotification/editnotification.component';
import { HomeComponent } from './MyComponents/Home/home/home.component';
import { RegistervendorComponent } from './MyComponents/Register/registervendor/registervendor.component';
import { LoginComponent } from './MyComponents/Login/login/login.component';
import { ActivityComponent } from './MyComponents/Activities/activity/activity.component';
import { CommonModule, DatePipe } from '@angular/common';
import { DpDatePickerModule } from 'ng2-date-picker';
import { VendorhomeComponent } from './MyComponents/VendorDashBoard/vendorhome/vendorhome.component';
 

@NgModule({
  declarations: [
    AppComponent,
    AddvendorComponent,
    ViewvendorsComponent,
    AddregulationComponent,
    ViewregulationsComponent,
   
    EditvendorComponent,
    EditregulationComponent,
    AddregulationtypeComponent,
    ViewregulationtypesComponent,
    EditregulationtypeComponent,
    ViewregulationsbyvendorComponent,
    AddnotificationComponent,
    ViewnotificationsComponent,
    EditnotificationComponent,
    HomeComponent,
    RegistervendorComponent,
    LoginComponent,
    ActivityComponent,
    VendorhomeComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(), // Add this line
    DatePipe,
    DpDatePickerModule 
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
