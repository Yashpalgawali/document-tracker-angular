import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Regulation } from 'src/app/Models/Regulation';
import { RegulationService } from 'src/app/Services/Regulation/regulation.service';

@Component({
  selector: 'app-addregulation',
  templateUrl: './addregulation.component.html',
  styleUrls: ['./addregulation.component.css']
})
export class AddregulationComponent {

  file: File | null = null;
  form: FormGroup;

  regulation : Regulation = new Regulation()
  constructor(private router: Router, private regulateserv: RegulationService, private fb: FormBuilder) {
    this.form = this.fb.group({
      regulation_name: [''],
      regulation_description: [''],
      regulation_frequency: [''],
      regulation_issued_date: [''],
      file: ['']
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  saveRegulation() {
    if (this.form.valid) {

    
      const formData = new FormData();
      formData.append('regulation_name', this.form.get('regulation_name')?.value);
      formData.append('regulation_description', this.form.get('regulation_description')?.value);
      formData.append('regulation_frequency', this.form.get('regulation_frequency')?.value);
      formData.append('regulation_issued_date', this.form.get('regulation_issued_date')?.value);
      formData.append('file', this.form.get('file')?.value);
      formData.append('vendor', this.form.get('vendor')?.value);

      if (this.file) {
        formData.append('file', this.file);
      }

      this.regulateserv.saveRegulation(formData).subscribe({
        complete: () => {
          sessionStorage.setItem('response', 'Regulation ' + this.form.get('regulation_name')?.value + ' is saved successfully');
          this.router.navigate(['viewregulations']);
        },
        error: (err) => {
          console.error(err);
          this.router.navigate(['viewregulations']);
        }
      });
    }
  }
  saveRegulationUsingObject()
  {
    this.regulateserv.saveRegulationUsingObject(this.regulation).subscribe({
      complete:() => {
        alert('Regulation is saved')
      },
      error : (err) => {
        alert('error')
      }
    })
  }
  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }
}