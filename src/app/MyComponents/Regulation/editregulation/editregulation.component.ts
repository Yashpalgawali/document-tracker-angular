import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Regulation } from 'src/app/Models/Regulation';
import { RegulationType } from 'src/app/Models/RegulationType';
import { RegulationService } from 'src/app/Services/Regulation/regulation.service';
import { RegulationTypeService } from 'src/app/Services/RegulationType/regulation-type.service';

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
  regulationtype : any
  constructor(private route : ActivatedRoute,private router : Router,private regulateserv : RegulationService,
    private regtypeserv : RegulationTypeService
  ) {}
  

  selectedFile: File | null = null;
  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }
  


  ngOnInit(): void {
      this.rid = this.route.snapshot.params['id'];

      this.regtypeserv.getAllRegulationTypes().subscribe({
        next: (data) => {
          this.regulationtype = data;
        }
      });

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
 
  updateRegulation()
  {
    const formData = new FormData();
    formData.append('regulation_name', (document.getElementById('regulation_name') as HTMLInputElement).value);
    formData.append('regulation_description', (document.getElementById('regulation_description') as HTMLInputElement).value);
    formData.append('regulation_frequency', (document.getElementById('regulation_frequency') as HTMLInputElement).value);
    formData.append('regulation_issued_date', (document.getElementById('regulation_issued_date') as HTMLInputElement).value);
    formData.append('regulation_type_id', (document.getElementById('regulation_type_id') as HTMLInputElement).value);
    
    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }

    this.regulateserv.saveRegulation(formData).subscribe({
      complete :() => {
        sessionStorage.setItem('response','Regulation '+this.regulation.regulation_name+' is updated successfully');
        this.router.navigate(['viewregulations']);
      },
      error : (err) => {
        sessionStorage.setItem('reserr','Regulation '+this.regulation.regulation_name+' is not updated');
        this.router.navigate(['viewregulations']);
      },
    })
  }
}
