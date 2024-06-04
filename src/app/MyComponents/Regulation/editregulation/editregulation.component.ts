import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Regulation } from 'src/app/Models/Regulation';
import { RegulationService } from 'src/app/Services/Regulation/regulation.service';

@Component({
  selector: 'app-editregulation',
  templateUrl: './editregulation.component.html',
  styleUrls: ['./editregulation.component.css']
})
export class EditregulationComponent implements OnInit{

  regulation : Regulation = new Regulation()
  reserr   : any
  response : any
  rid !: number

  constructor(private route : ActivatedRoute,private router : Router,private regulateserv : RegulationService) {}
  
  ngOnInit(): void {
      this.rid = this.route.snapshot.params['id'];
      alert('ID = '+this.rid)
      this.regulateserv.getRegulationbyId(this.rid).subscribe({
        next:(data) => {
          if(data!=null)
          {
            this.regulation = data
          }
          else {
            sessionStorage.setItem('reserr','No regulation found for given ID')
          this.router.navigate(['viewregulations'])
          }
        },
        error :(e)=>{
          sessionStorage.setItem('reserr','No regulation found for given ID')
          this.router.navigate(['viewregulations'])
        }
      })
  }
}
