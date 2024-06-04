import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddvendortypeComponent } from './MyComponents/VendorType/addvendortype/addvendortype.component';
import { ViewvendortypesComponent } from './MyComponents/VendorType/viewvendortypes/viewvendortypes.component';
import { AddvendorComponent } from './MyComponents/Vendor/addvendor/addvendor.component';
import { ViewvendorsComponent } from './MyComponents/Vendor/viewvendors/viewvendors.component';
import { EditvendorComponent } from './MyComponents/Vendor/editvendor/editvendor.component';
import { AddregulationComponent } from './MyComponents/Regulation/addregulation/addregulation.component';
import { EditregulationComponent } from './MyComponents/Regulation/editregulation/editregulation.component';
import { ViewregulationsComponent } from './MyComponents/Regulation/viewregulations/viewregulations.component';

const routes: Routes = [
  { path : "addvendortype" , component: AddvendortypeComponent },
  { path : "viewvendortypes" , component: ViewvendortypesComponent},
  { path : "edit/vendortype/:id" , component: EditvendorComponent },
  { path : "addvendor" , component: AddvendorComponent },
  { path : "viewvendors" , component: ViewvendorsComponent },
  { path : "edit/vendor/:id" , component: EditvendorComponent },
  { path : "addregulation" , component: AddregulationComponent },
  { path : "viewregulations" , component: ViewregulationsComponent },
  { path : "edit/regulation/:id" , component: EditregulationComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
