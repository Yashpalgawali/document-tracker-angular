import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegulationService } from 'src/app/Services/Regulation/regulation.service';

@Component({
  selector: 'app-viewregulationsbyvendor',
  templateUrl: './viewregulationsbyvendor.component.html',
  styleUrls: ['./viewregulationsbyvendor.component.css']
})
export class ViewregulationsbyvendorComponent implements OnInit {
  reserr : any
  response : any 
  regulationlist : any
  vid : any
  isExpired : any
  constructor (private router : Router,private regulateserv :RegulationService) { }

  ngOnInit(): void {
   
    this.vid = sessionStorage.getItem('vendor_id')
    
    this.regulateserv.getRegulationbyVendorId(this.vid).subscribe({
      next:(data)=> {
       
        if(sessionStorage.getItem('reserr')!=null)
          {
            this.reserr = sessionStorage.getItem('reserr')
            setTimeout(() => {
              sessionStorage.removeItem('reserr');
              this.reserr=""
            }, 3000);
          }
          if(sessionStorage.getItem('response')!=null)
            {
              this.response = sessionStorage.getItem('response')
              setTimeout(() => {
                sessionStorage.removeItem('response');
                this.response=""
              }, 3000);
            }
        this.regulationlist = data
      },
    })
  }
  openPdf(regid : number) {
    // this.regulateserv.getPdf(regid).subscribe((blob) => {
    //   const url = window.URL.createObjectURL(blob);
    //   window.open(url, '_blank');
    // })

    this.regulateserv.getPdf(regid).subscribe({
      next :(data)=> {
        const url = window.URL.createObjectURL(data);
          window.open(url, '_blank');
      },
      error:(err) =>{
          alert('File not found')
      },
    })
  }
  getRegulationHistoryByVendorAndRegulationId( rid : any){

    this.router.navigate(['regulation/history/',rid])
  }

  getRegulationByRegIdVendorId(rid : any){

    this.router.navigate(['edit/regulation/',rid])
    // let vendor_id = parseInt(''+sessionStorage.getItem('vendor_id'))
    // this.regulateserv.getRegulationbyRegulationIdVendorId(vendor_id ,rid).subscribe({
    //   next: (data)=> {
          
    //   },
    //   error:(err) =>{
    //       sessionStorage.setItem('reserr','No regulation found for given ID')
    //       if(sessionStorage.getItem('user_type')=='1')
    //       {
    //         this.router.navigate(['viewregulation'])
    //       }
    //       else {
    //         this.router.navigate(['vendor/viewregulations'])
    //       }
    //   },
    // })
  }

 // Method to check if a date is greater than today
isDateGreaterThanToday(dateStr: string): boolean { 
  
  const today = new Date();
  
  let [date , month ,year] = dateStr.split("-")
  let ndate = month+"-"+date+"-"+year
  const regulationDate = new Date(ndate);

  if (regulationDate > today) {
    this.isExpired = ''; // Clear expiration status
    return true; // Date is in the future
  } else if (regulationDate < today) {
    this.isExpired = 'Expired'; // Set status to "Expired"
  } else {
    this.isExpired = 'Due today'; // Set status to "Due today"
  }

  return false; // Date is today or in the past 
}
}
