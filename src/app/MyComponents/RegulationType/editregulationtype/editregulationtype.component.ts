import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RegulationType } from 'src/app/Models/RegulationType';
import { RegulationTypeService } from 'src/app/Services/RegulationType/regulation-type.service';

@Component({
  selector: 'app-editregulationtype',
  templateUrl: './editregulationtype.component.html',
  styleUrls: ['./editregulationtype.component.css']
})
export class EditregulationtypeComponent implements OnInit {

  regtype :RegulationType = new RegulationType();
  regtypeid !: number
  constructor(private regtypeserv : RegulationTypeService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
  
    this.regtypeid = this.route.snapshot.params['id'];
     this.regtypeserv.getRegulationTypeById(this.regtypeid ).subscribe({
      next:(data)=>{
        this.regtype=data
      },
      error : (err) => {
        sessionStorage.setItem('reserr','No  regulation Type found');
        this.router.navigate(['viewregulationtypes']);
      }
     })
  }
  
  public updateRegulationType()
  {
    this.regtypeserv.updateRegulationType(this.regtype).subscribe({
      complete :()=> {
          sessionStorage.setItem('response','Regulation Type '+this.regtype.regulation_type+' is updated successfully');
          this.router.navigate(['viewregulationtypes']);
      },
      error:(err) =>{
        sessionStorage.setItem('reserr','Regulation Type '+this.regtype.regulation_type+' is not updated');
          this.router.navigate(['viewregulationtypes']);
      }
    })
  }
}
