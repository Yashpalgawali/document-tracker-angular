import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegulationService } from 'src/app/Services/Regulation/regulation.service';

@Component({
  selector: 'app-viewregulations',
  templateUrl: './viewregulations.component.html',
  styleUrls: ['./viewregulations.component.css']
})
export class ViewregulationsComponent implements OnInit{

  reserr : any
  response : any
  regualtionlist : any

  constructor (private router : Router,private regulateserv :RegulationService) { }

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
        this.regualtionlist = data
      },
    })
  }

  public getRegulationById(rid : number)
  {
    this.router.navigate(['/edit/regulation/',rid])
  }
}
