import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RegulationTypeService } from 'src/app/Services/RegulationType/regulation-type.service';

@Component({
  selector: 'app-viewregulationtypes',
  templateUrl: './viewregulationtypes.component.html',
  styleUrls: ['./viewregulationtypes.component.css']
})
export class ViewregulationtypesComponent {

  regtypelist : any
  reserr : any
  response : any
  constructor(private regtypeserv : RegulationTypeService,private router : Router){ }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    alert(sessionStorage.getItem('token'))
    this.regtypeserv.getAllRegulationTypes().subscribe({
      next:(data) => {
        this.regtypelist = data
        if(sessionStorage.getItem('response') !=null) {
          this.response = sessionStorage.getItem('response');
          setTimeout(() => {
            sessionStorage.removeItem('response');
            this.response=""
          }, 3000);
        }

        if(sessionStorage.getItem('reserr') !=null) {
          this.reserr = sessionStorage.getItem('reserr');
          setTimeout(() => {
            this.reserr=""
            sessionStorage.removeItem('reserr');
          }, 3000);
        }
      },
    })
  }


  getRegulationTypeById(rid : number)
  {
    this.router.navigate(['/edit/regulationtype/',rid]);
  }
}
