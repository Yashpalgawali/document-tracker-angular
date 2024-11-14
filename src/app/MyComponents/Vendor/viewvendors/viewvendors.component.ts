import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegulationService } from 'src/app/Services/Regulation/regulation.service';
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
  user_type : any

  constructor  (private vendserv : VendorService, private router : Router,private regserv : RegulationService) {}

  ngOnInit(): void {
    this.user_type = sessionStorage.getItem('user_type')
    if(this.user_type!=1) {
      sessionStorage.setItem('reserr','You are not Authorized. Please Login to Continue!!');
      this.router.navigate(['login']);
    }
    
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

  exportRegulationsVendorById(vid : number)
  { 
    
      this.regserv.exportAllRegulationsByVendorIdToExcel(vid).subscribe((resp : any)=>{
        const blob = new Blob([resp],{type : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = 'Regulation List .xlsx'
        link.click()
      })
  }

  getVendornamebyId(vid : number)
  {
    this.vendserv.getVendorById(vid).subscribe({
      next: (data) =>{
          let vendor_name = data.vendor_name
      },
    })
  }
}
