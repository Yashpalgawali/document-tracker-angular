import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddvendorComponent } from './MyComponents/Vendor/addvendor/addvendor.component';
import { ViewvendorsComponent } from './MyComponents/Vendor/viewvendors/viewvendors.component';
import { EditvendorComponent } from './MyComponents/Vendor/editvendor/editvendor.component';
import { AddregulationComponent } from './MyComponents/Regulation/addregulation/addregulation.component';
import { EditregulationComponent } from './MyComponents/Regulation/editregulation/editregulation.component';
import { ViewregulationsComponent } from './MyComponents/Regulation/viewregulations/viewregulations.component';
import { AddregulationtypeComponent } from './MyComponents/RegulationType/addregulationtype/addregulationtype.component';
import { ViewregulationtypesComponent } from './MyComponents/RegulationType/viewregulationtypes/viewregulationtypes.component';
import { EditregulationtypeComponent } from './MyComponents/RegulationType/editregulationtype/editregulationtype.component';
import { ViewregulationsbyvendorComponent } from './MyComponents/Regulation/viewregulationsbyvendor/viewregulationsbyvendor.component';
import { AddnotificationComponent } from './MyComponents/Notification/addnotification/addnotification.component';
import { ViewnotificationsComponent } from './MyComponents/Notification/viewnotifications/viewnotifications.component';
import { EditnotificationComponent } from './MyComponents/Notification/editnotification/editnotification.component';
import { HomeComponent } from './MyComponents/Home/home/home.component';
import { LoginComponent } from './MyComponents/Login/login/login.component';
import { ActivityComponent } from './MyComponents/Activities/activity/activity.component';
import { RegistervendorComponent } from './MyComponents/Register/registervendor/registervendor.component';
import { RouteGuardService } from './Services/routeguard.service';
import { ViewregulationhistoryComponent } from './MyComponents/Regulation/viewregulationhistory/viewregulationhistory.component';

const routes: Routes = [

  { path : "edit/vendortype/:id" , component: EditvendorComponent    },
  { path : "addvendor" , component: AddvendorComponent  },
  { path : "viewvendors" , component: ViewvendorsComponent   },
  { path : "edit/vendor/:id" , component: EditvendorComponent   },
  
  { path : "vendor/viewregulations" , component: ViewregulationsbyvendorComponent  },

  { path : "addregulation" , component: AddregulationComponent },
  { path : "viewregulations" , component: ViewregulationsComponent },
  { path : "edit/regulation/:id" , component: EditregulationComponent} ,

  { path : "addregulationtype" , component: AddregulationtypeComponent  },
  { path : "viewregulationtypes" , component: ViewregulationtypesComponent  },
  { path : "edit/regulationtype/:id" , component: EditregulationtypeComponent  },
  
  { path : "addnotification" , component: AddnotificationComponent  },
  { path : "viewnotification" , component: ViewnotificationsComponent  },
  { path : "notification/edit/:id" , component: EditnotificationComponent },
  
  { path : "" , component : HomeComponent  },
  { path : "login" , component : LoginComponent  },

  { path : "home" , component : HomeComponent  },

  { path : "regulation/history/:rid" , component : ViewregulationhistoryComponent  },
  
  { path : "activities", component : ActivityComponent  },
  { path : "registervendor", component : RegistervendorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
