import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/Models/Vendor';
import { VendortypeService } from 'src/app/Services/VendorType/vendortype.service';
import { VendorService } from 'src/app/Services/Vendor/vendor.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.component.html',
  styleUrls: ['./addvendor.component.css']
})
export class AddvendorComponent implements OnInit {

constructor(private vtypeserv : VendortypeService,private vendserv : VendorService,private router : Router,
            private fb: FormBuilder){ }

vendor : Vendor = new Vendor();
vtypelist : any
 ngOnInit(): void {
   
}

savevendor() { 
  if (this.vendor.password !== this.vendor.cnf_password) {
    alert('Passwords do not match!');
    return;
  }

  this.vendserv.saveVendor(this.vendor).subscribe({
    complete : ()=>{
      sessionStorage.setItem('response','Vendor '+this.vendor.vendor_name+' is saved successfully');
      this.router.navigate(['viewvendors'])
    },
    error:(e)=> {
      alert('Not saved')
    }
  })
}

checkpass()
{

}
}
