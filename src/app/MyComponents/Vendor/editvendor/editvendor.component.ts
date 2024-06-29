import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Vendor } from 'src/app/Models/Vendor';
import { VendortypeService } from 'src/app/Services/VendorType/vendortype.service';
import { VendorService } from 'src/app/Services/Vendor/vendor.service';

@Component({
  selector: 'app-editvendor',
  templateUrl: './editvendor.component.html',
  styleUrls: ['./editvendor.component.css']
})
export class EditvendorComponent implements OnInit{

  vendor : Vendor = new Vendor();
  vendor_id !: number
  vtypelist : any
  constructor(private vtypeserv : VendortypeService,private route : ActivatedRoute,
              private vendserv : VendorService,private router : Router) {
   }

  ngOnInit(): void {
    this.vendor_id = this.route.snapshot.params['id']
    this.vendserv.getVendorById(this.vendor_id).subscribe({
      next:(data)=> {
          this.vendor= data
      },
      error:(err) =>{

        sessionStorage.setItem('reserr','No Vendor Found ');
        this.router.navigate(['viewvendors'])
      }
    })

  }

  updatevendor() {
   
    
  }

}
