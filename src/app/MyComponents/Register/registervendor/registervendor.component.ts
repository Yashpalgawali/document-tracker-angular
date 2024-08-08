import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/Models/Vendor';
import { VendorService } from 'src/app/Services/Vendor/vendor.service';

@Component({
  selector: 'app-registervendor',
  templateUrl: './registervendor.component.html',
  styleUrls: ['./registervendor.component.css']
})
export class RegistervendorComponent implements OnInit {

  vendor : Vendor = new Vendor()
  
  constructor(private router : Router,private vendserv : VendorService) {}

  ngOnInit(): void { }

  registerVendor()
  {
    this.vendserv.saveVendor(this.vendor).subscribe({
      complete: () => {
        sessionStorage.setItem('response','Vendor '+this.vendor.vendor_name+' is registered successfully ')
        this.router.navigate(['login'])
      },
      error :(err) => {
        sessionStorage.setItem('reserr','Vendor '+this.vendor.vendor_name+' is not registered ')
        this.router.navigate(['login'])
      }
    })
  }
}
