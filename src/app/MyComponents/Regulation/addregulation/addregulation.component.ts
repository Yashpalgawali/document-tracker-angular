import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Regulation } from 'src/app/Models/Regulation';
import { RegulationService } from 'src/app/Services/Regulation/regulation.service';

@Component({
  selector: 'app-addregulation',
  templateUrl: './addregulation.component.html',
  styleUrls: ['./addregulation.component.css']
})
export class AddregulationComponent {

  regulation : Regulation = new Regulation()
  constructor(private router : Router ,private regulateserv : RegulationService) { }

  saveRegulation()
  {
    this.regulateserv.saveRegulation(this.regulation).subscribe({
      complete : () => {
          sessionStorage.setItem('response','Regulation '+this.regulation.regulation_name+' is saved successfully');
          this.router.navigate(['viewregulations']);
      },
      error : (err) => {
          this.router.navigate(['viewregulations']);
      },
    })
  }
}
