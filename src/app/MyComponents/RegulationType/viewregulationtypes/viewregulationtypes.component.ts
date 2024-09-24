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
  user_type : any
  constructor(private regtypeserv : RegulationTypeService,private router : Router){ }

  ngOnInit(): void {
    
    this.user_type = sessionStorage.getItem('user_type')
    if(this.user_type!=1){
      
      sessionStorage.setItem('reserr','You are not Authorized. Please Login to Continue!!');
      this.router.navigate(['login']);
    }
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
