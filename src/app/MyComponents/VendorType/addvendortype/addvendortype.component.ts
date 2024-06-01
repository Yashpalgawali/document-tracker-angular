import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VendorType } from 'src/app/Models/VendorType';
import { VendortypeService } from 'src/app/Services/VendorType/vendortype.service';

@Component({
  selector: 'app-addvendortype',
  templateUrl: './addvendortype.component.html',
  styleUrls: ['./addvendortype.component.css']
})
export class AddvendortypeComponent {

  vendortype : VendorType = new VendorType(); 
    constructor(private route : Router,private vendtypeserv : VendortypeService) {}

    public saveVendorType()
    {
     //alert(this.vendortype.vendor_type);
      this.vendtypeserv.saveVendorType(this.vendortype).subscribe({
        next : (data) =>{
          alert('saved '+data);
        },
        error:(e)=> {
          alert('Not saved');
        }
      })
    }
}
