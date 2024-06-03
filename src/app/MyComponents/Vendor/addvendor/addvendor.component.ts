import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/Models/Vendor';
import { VendortypeService } from 'src/app/Services/VendorType/vendortype.service';
import { VendorService } from 'src/app/Services/vendor.service';

@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.component.html',
  styleUrls: ['./addvendor.component.css']
})
export class AddvendorComponent implements OnInit {

constructor(private vtypeserv : VendortypeService,private vendserv : VendorService){}

vendor : Vendor = new Vendor();
vtypelist : any
 ngOnInit(): void {
   this.vtypeserv.getAllVendorTypes().subscribe({
    next:(data)=>{
      this.vtypelist=data
    },
    error :(e) =>{

    }
  })
}

savevendor() {
  this.vendserv.saveVendor(this.vendor).subscribe({
    complete : ()=>{
      alert('saved vendor');
    },
    error:(e)=> {
      alert('Not saved')
    }
  }

  )
}

}
