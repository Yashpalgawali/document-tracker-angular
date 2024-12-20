import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
 
import { GlobalComponent } from 'src/app/GlobalComponents';
import { RegulationService } from 'src/app/Services/Regulation/regulation.service';
 
@Component({
  selector: 'app-viewregulations',
  templateUrl: './viewregulations.component.html',
  styleUrls: ['./viewregulations.component.css']
})
export class ViewregulationsComponent implements OnInit {

  reserr : any
  response : any
  regulationlist : any
  isExpired: string = '';
  app_url = GlobalComponent.app_url 

  pdfUrl : any
  vendor_type : any
  date: Date = new Date(); // Example date to compare
    
  constructor (private router : Router,private regulateserv :RegulationService) { }

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
   
  ngOnInit(): void {
    
    if(sessionStorage.getItem('user_type')!='1'){
      sessionStorage.setItem('reserr','You are not Authorized. PLease Login to continue!!')
      this.router.navigate(['vendorhome'])
    }
    this.regulateserv.getAllRegulation().subscribe({
      next:(data)=> {
      
        if(sessionStorage.getItem('reserr')!=null)
          {
            this.reserr = sessionStorage.getItem('reserr')
            setTimeout(() => {
              this.reserr=""
              sessionStorage.removeItem('reserr');
            }, 3000);
          }
          if(sessionStorage.getItem('response')!=null)
            {
              this.response = sessionStorage.getItem('response')
              setTimeout(() => {
                this.response=""
                sessionStorage.removeItem('response');
              }, 3000);
            }
        this.regulationlist = data
      },
    })
  }
 
  public getRegulationById(rid : number)
  {
    this.router.navigate(['/edit/regulation/',rid])
  }

  getRegulationHistoryByVendorAndRegulationId( rid : any){

    this.router.navigate(['regulation/history/',rid])
  }

  exportAllRegulationsToExcel(){
    this.regulateserv.exportToExcel().subscribe((resp : any)=>{
      const blob = new Blob([resp],{type : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = 'Active Regulation List.xlsx'
      link.click()

    })
  }
}
