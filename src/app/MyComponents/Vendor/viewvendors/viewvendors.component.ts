import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorService } from 'src/app/Services/Vendor/vendor.service';

@Component({
  selector: 'app-viewvendors',
  templateUrl: './viewvendors.component.html',
  styleUrls: ['./viewvendors.component.css']
})
export class ViewvendorsComponent implements OnInit{
  
  vendlist :any
  reserr : any
  response : any
  constructor  (private vendserv : VendorService, private router : Router) {}
  ngOnInit(): void {
    
    this.vendserv.getAllVendors().subscribe({
      next : (data) => {
          this.vendlist=data
          if( sessionStorage.getItem('reserr') !=null)
          {
              setTimeout(() => {
                this.reserr = sessionStorage.getItem('reserr');
                sessionStorage.removeItem('reserr')
                  this.reserr=''
              }, 3000);
          }

          if( sessionStorage.getItem('response') !=null)
          {
                setTimeout(() => {
                  this.response = sessionStorage.getItem('response');
                  sessionStorage.removeItem('response')
                  this.response=''
                }, 3000);
          }
      },
      error:(err)=> {
          this.router.navigate(['viewvendors'])
      },
    })
  }


  getVendorById(vid : number)
  {
    this.router.navigate(['/edit/vendor/',vid]);
  }
}
