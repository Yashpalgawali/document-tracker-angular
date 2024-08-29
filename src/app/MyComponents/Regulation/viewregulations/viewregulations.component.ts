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
  isExpired : any
  app_url = GlobalComponent.app_url 
  
  pdfUrl : any
   
  date: Date = new Date(); // Example date to compare
  
  constructor (private router : Router,private regulateserv :RegulationService) { }

  openPdf(regid : number) {
    this.regulateserv.getPdf(regid).subscribe((blob) => {
      const url = window.URL.createObjectURL(blob);
      window.open(url, '_blank');
    })
  }

// Method to check if a date is greater than today
isDateGreaterThanToday(dateStr: string): boolean {
 
  const today = new Date();
  const regulationDate = new Date(dateStr);
  

  if (regulationDate > today) {
    return true; // Date is in the future
  } else if (regulationDate < today) {
    this.isExpired = "Expired";
  } else {
    this.isExpired = "Due today";
  }

  return false; // Date is today
  
  // if(regulationDate > today) {
  //   this.isExpired = " "
  // }
  // if(regulationDate < today) {
  //   this.isExpired = "Expired"
  // }
  // if(regulationDate == today) {
  //   this.isExpired = "Due today"
  // }
  
  // return regulationDate > today;
}
   
  ngOnInit(): void {
   
    this.regulateserv.getAllRegulation().subscribe({
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
 
  public getRegulationById(rid : number)
  {
    this.router.navigate(['/edit/regulation/',rid])
  }
}
