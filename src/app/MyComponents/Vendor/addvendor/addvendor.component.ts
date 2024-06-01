import { Component } from '@angular/core';
import { Vendor } from 'src/app/Models/Vendor';
import { VendortypeService } from 'src/app/Services/VendorType/vendortype.service';

@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.component.html',
  styleUrls: ['./addvendor.component.css']
})
export class AddvendorComponent {

constructor(private vtypeserv : VendortypeService){}

vendor : Vendor = new Vendor();
vtypelist : any
 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

  this.vtypeserv.getAllVendorTypes().subscribe({
    next:(data)=>{
      this.vtypelist=data
    },
    error :(e) =>{

    }
  })
}

savevendor() {

}

}
