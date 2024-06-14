import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegulationType } from 'src/app/Models/RegulationType';
import { RegulationTypeService } from 'src/app/Services/RegulationType/regulation-type.service';

@Component({
  selector: 'app-addregulationtype',
  templateUrl: './addregulationtype.component.html',
  styleUrls: ['./addregulationtype.component.css']
})
export class AddregulationtypeComponent implements OnInit{


  regtype :  RegulationType = new RegulationType();
  constructor(private regtypeserv : RegulationTypeService,private router : Router){}

  ngOnInit(): void {
    
  }

saveRegulationType() {
  this.regtypeserv.saveRegulationType(this.regtype).subscribe({
    complete:()=>{
      sessionStorage.setItem('response','Regulation type '+this.regtype.regulation_type+' is saved successfully');
      this.router.navigate(['viewregulationtypes']);
    },
    error :(err)=> {
      sessionStorage.setItem('reserr','Regulation type '+this.regtype.regulation_type+' is not saved');
      this.router.navigate(['viewregulationtypes']);
    },
  })
}
}
