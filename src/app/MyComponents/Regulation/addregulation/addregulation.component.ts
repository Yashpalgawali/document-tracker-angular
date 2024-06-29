import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Regulation } from 'src/app/Models/Regulation';
import { RegulationService } from 'src/app/Services/Regulation/regulation.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { VendorService } from 'src/app/Services/Vendor/vendor.service';
import { RegulationTypeService } from 'src/app/Services/RegulationType/regulation-type.service';

@Component({
  selector: 'app-addregulation',
  templateUrl: './addregulation.component.html',
  styleUrls: ['./addregulation.component.css']
})
export class AddregulationComponent  {
  myGroup: FormGroup;
  constructor(private router: Router, private regulateserv: RegulationService, private fb: FormBuilder,
                private vendserv : VendorService, private regtypeserv : RegulationTypeService)
  {
    this.myGroup = this.fb.group({
      regulation_name: ['', Validators.required],
      regulation_description: ['', Validators.required],
      regulation_issued_date: ['', Validators.required],
      regulation_frequency: ['', Validators.required],
      regulation_type_id: ['', Validators.required]
    });
  }
  selectedFile: File | null = null;
  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    // const formData = new FormData();
    // formData.append('regulation_name', (document.getElementById('regulation_name') as HTMLInputElement).value);
    // formData.append('regulation_description', (document.getElementById('regulation_description') as HTMLInputElement).value);
    // formData.append('regulation_frequency', (document.getElementById('regulation_frequency') as HTMLInputElement).value);
    // formData.append('regulation_issued_date', (document.getElementById('regulation_issued_date') as HTMLInputElement).value);
    // formData.append('regulation_type_id', (document.getElementById('regulation_type_id') as HTMLInputElement).value);
    
    const formData = new FormData();
    formData.append('regulation_name', this.myGroup.get('regulation_name')?.value);
    formData.append('regulation_description', this.myGroup.get('regulation_description')?.value);
    formData.append('regulation_issued_date', this.myGroup.get('regulation_issued_date')?.value);
    formData.append('regulation_frequency', this.myGroup.get('regulation_frequency')?.value);
    formData.append('regulation_type_id', this.myGroup.get('regulation_type_id')?.value);
    

    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }

    this.regulateserv.saveRegulation(formData).subscribe({
      complete :() => {
        sessionStorage.setItem('response','Regulation '+this.myGroup.get('regulation_name')?.value+' is saved successfully');
        this.router.navigate(['viewregulations']);
      },
      error : (err) => {
        alert('NOT saved');
      },
    })
  }


  // selectedDate : Date = new Date();
  // ate : Date = new Date();
  // file: File | null = null;
  // form: FormGroup;

  // selectedTime !: Date;
  // minTime !: Date
    
  // time: Date = new Date();
  
  regulationtype : any
    
  // public datepickerConfig: Partial<BsDatepickerConfig> = {
  //   containerClass : 'theme-dark-blue',
  //   dateInputFormat: 'DD-MM-YYYY',
    
  // };

  // getnextdate(event : any)
  // {
  //   alert('getnextdate caleed '+event.target.value)
  // }

  // regulation : Regulation = new Regulation()
  // constructor(private router: Router, private regulateserv: RegulationService, private fb: FormBuilder,
  //             private vendserv : VendorService, private regtypeserv : RegulationTypeService
  // ) {
  //   this.form = this.fb.group({
  //     regulation_name: [''],
  //     regulation_description: [''],
  //     regulation_frequency: [''],
  //     regulation_issued_date: [''],
  //     regulation_type_id: [''],
  //     file: ['']
  //   });
  // }

  ngOnInit(): void {

    this.regtypeserv.getAllRegulationTypes().subscribe({
      next: (data) => {
        this.regulationtype = data;
      }
    });
  }

  // onFileChange(event: any) {
  //   if (event.target.files.length > 0) {
  //     this.file = event.target.files[0];
  //   }
  // }

  // saveRegulation() {
  //   if (this.form.valid) {
  //     const formData = new FormData();
  //     formData.append('regulation_name', this.form.get('regulation_name')?.value);
  //     formData.append('regulation_description', this.form.get('regulation_description')?.value);
  //     formData.append('regulation_frequency', this.form.get('regulation_frequency')?.value);
  //     formData.append('regulation_issued_date', this.form.get('regulation_issued_date')?.value);
  //     formData.append('regulation_type_id', this.form.get('regulation_type_id')?.value);

  //     if (this.file) {
  //       formData.append('file', this.file);
  //     }

  //     this.regulateserv.saveRegulation(formData).subscribe({
  //       complete: () => {
  //         sessionStorage.setItem('response', 'Regulation ' + this.form.get('regulation_name')?.value + ' is saved successfully');
  //         this.router.navigate(['viewregulations']);
  //       },
  //       error: (err) => {
  //         console.error(err);
  //         this.router.navigate(['viewregulations']);
  //       }
  //     });
  //   }
  // }

  // saveRegulation() {
  //   if (this.form.valid) {

    
  //     const formData = new FormData();
  //     formData.append('regulation_name', this.form.get('regulation_name')?.value);
  //     formData.append('regulation_description', this.form.get('regulation_description')?.value);
  //     formData.append('regulation_frequency', this.form.get('regulation_frequency')?.value);
  //     formData.append('regulation_issued_date', this.form.get('regulation_issued_date')?.value);
  //     formData.append('regulation_type_id', this.form.get('regulation_type_id')?.value);
     
  //     if (this.file) {
  //       formData.append('file', this.file);
  //     }

  //     alert('Form data is '+formData);
  //     this.regulateserv.saveRegulation(formData).subscribe({
  //       complete: () => {
  //         sessionStorage.setItem('response', 'Regulation ' + this.form.get('regulation_name')?.value + ' is saved successfully');
  //         this.router.navigate(['viewregulations']);
  //       },
  //       error: (err) => {
  //         console.error(err);
  //         this.router.navigate(['viewregulations']);
  //       }
  //     });
  //   }
  // }
  // saveRegulationUsingObject()
  // {
  //   this.regulateserv.saveRegulationUsingObject(this.regulation).subscribe({
  //     complete:() => {
  //       alert('Regulation is saved')
  //     },
  //     error : (err) => {
  //       alert('error')
  //     }
  //   })
  // }
  // onFileSelect(event: any) {
  //   if (event.target.files.length > 0) {
  //     this.file = event.target.files[0];
  //   }
  // }
}