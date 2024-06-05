import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddvendorComponent } from './MyComponents/Vendor/addvendor/addvendor.component';
import { ViewvendorsComponent } from './MyComponents/Vendor/viewvendors/viewvendors.component';
import { AddregulationComponent } from './MyComponents/Regulation/addregulation/addregulation.component';
import { ViewregulationsComponent } from './MyComponents/Regulation/viewregulations/viewregulations.component';
import { AddvendortypeComponent } from './MyComponents/VendorType/addvendortype/addvendortype.component';
import { ViewvendortypesComponent } from './MyComponents/VendorType/viewvendortypes/viewvendortypes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EditvendorComponent } from './MyComponents/Vendor/editvendor/editvendor.component';
import { EditregulationComponent } from './MyComponents/Regulation/editregulation/editregulation.component';
import { EditvendortypeComponent } from './MyComponents/VendorType/editvendortype/editvendortype.component';

@NgModule({
  declarations: [
    AppComponent,
    AddvendorComponent,
    ViewvendorsComponent,
    AddregulationComponent,
    ViewregulationsComponent,
    AddvendortypeComponent,
    ViewvendortypesComponent,
    EditvendorComponent,
    EditvendortypeComponent,
    EditregulationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
