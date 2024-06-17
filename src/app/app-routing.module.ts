import { NgModule } from '@angular/core';
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

const routes: Routes = [

  { path : "edit/vendortype/:id" , component: EditvendorComponent },
  { path : "addvendor" , component: AddvendorComponent },
  { path : "viewvendors" , component: ViewvendorsComponent },
  { path : "edit/vendor/:id" , component: EditvendorComponent },
  { path : "addregulation" , component: AddregulationComponent },
  { path : "viewregulations" , component: ViewregulationsComponent },
  { path : "edit/regulation/:id" , component: EditregulationComponent },
  { path : "addregulationtype" , component: AddregulationtypeComponent},
  { path : "viewregulationtypes" , component: ViewregulationtypesComponent},
  { path : "edit/regulationtype/:id" , component: EditregulationtypeComponent},
  { path : "vendor/viewregulations" , component: ViewregulationsbyvendorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
