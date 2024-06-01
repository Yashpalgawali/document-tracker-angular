import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddvendortypeComponent } from './MyComponents/VendorType/addvendortype/addvendortype.component';
import { ViewvendortypesComponent } from './MyComponents/VendorType/viewvendortypes/viewvendortypes.component';
import { AddvendorComponent } from './MyComponents/Vendor/addvendor/addvendor.component';

const routes: Routes = [
  { path : "addvendortype" , component: AddvendortypeComponent },
  { path : "viewvendortypes" , component: ViewvendortypesComponent},
  { path : "addvendor" , component: AddvendorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
