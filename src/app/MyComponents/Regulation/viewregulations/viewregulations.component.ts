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

   // Method to check if a date is greater than today
   isDateGreaterThanToday(dateStr: string): boolean {
 
    const today = new Date();
    const regulationDate = new Date(dateStr);
    
    return regulationDate < today;
  }

     

  reserr : any
  response : any
  regulationlist : any
   
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
// Method to parse date from "dd-MM-yyyy" format to a Date object
// parseDate(dateString: string): Date {
//   const [day, month, year] = dateString.split('-').map(Number);
//   return new Date(year, month - 1, day);
// }

// // Method to check if the regulation date is less than today's date
// isDateLessThanToday(date: string): boolean {
//   const today = new Date();
//   const regulationDate = this.parseDate(date);
//   return regulationDate < today;
// }
  public getRegulationById(rid : number)
  {
    this.router.navigate(['/edit/regulation/',rid])
  }
}
