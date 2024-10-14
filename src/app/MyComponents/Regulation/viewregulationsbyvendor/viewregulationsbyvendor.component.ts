import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegulationService } from 'src/app/Services/Regulation/regulation.service';

@Component({
  selector: 'app-viewregulationsbyvendor',
  templateUrl: './viewregulationsbyvendor.component.html',
  styleUrls: ['./viewregulationsbyvendor.component.css']
})
export class ViewregulationsbyvendorComponent {
  reserr : any
  response : any 
  regulationlist : any
  vid : any
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
}
