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
import { LogoutComponent } from './MyComponents/Login/logout/logout.component';
import { VendorhomeComponent } from './MyComponents/VendorDashBoard/vendorhome/vendorhome.component';

const routes: Routes = [

  { path : "edit/vendortype/:id" , component: EditvendorComponent ,canActivate : [RouteGuardService]   },
  { path : "addvendor" , component: AddvendorComponent  ,canActivate : [RouteGuardService]  },
  { path : "viewvendors" , component: ViewvendorsComponent ,canActivate : [RouteGuardService]   },
  { path : "edit/vendor/:id" , component: EditvendorComponent ,canActivate : [RouteGuardService]   },
  
  { path : "vendor/viewregulations" , component: ViewregulationsbyvendorComponent ,canActivate : [RouteGuardService]  },

  { path : "addregulation" , component: AddregulationComponent ,canActivate : [RouteGuardService] },
  { path : "viewregulations" , component: ViewregulationsComponent ,canActivate : [RouteGuardService] },
  { path : "edit/regulation/:id" , component: EditregulationComponent ,canActivate : [RouteGuardService] } ,

  { path : "addregulationtype" , component: AddregulationtypeComponent ,canActivate : [RouteGuardService]  },
  { path : "viewregulationtypes" , component: ViewregulationtypesComponent ,canActivate : [RouteGuardService]  },
  { path : "edit/regulationtype/:id" , component: EditregulationtypeComponent ,canActivate : [RouteGuardService]  },
  
  { path : "addnotification" , component: AddnotificationComponent ,canActivate : [RouteGuardService]  },
  { path : "viewnotification" , component: ViewnotificationsComponent ,canActivate : [RouteGuardService]  },
  { path : "notification/edit/:id" , component: EditnotificationComponent ,canActivate : [RouteGuardService] },
  
  { path : "" , component : LoginComponent  },
  { path : "login" , component : LoginComponent  },
  { path : "logout" , component : LogoutComponent ,canActivate : [RouteGuardService] },

  { path : "home" , component : HomeComponent ,canActivate : [RouteGuardService]  },

  { path : "regulation/history/:rid" , component : ViewregulationhistoryComponent  ,canActivate : [RouteGuardService] },
  
  { path : "activities", component : ActivityComponent ,canActivate : [RouteGuardService]  },
  { path : "registervendor", component : RegistervendorComponent },

  { path : "vendorhome", component : VendorhomeComponent ,canActivate : [RouteGuardService]  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
