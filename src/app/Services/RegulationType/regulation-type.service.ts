import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalComponent } from 'src/app/GlobalComponents';
import { RegulationType } from 'src/app/Models/RegulationType';

@Injectable({
  providedIn: 'root'
})
export class RegulationTypeService {

  
  constructor(private http : HttpClient) { }
  base_url = GlobalComponent.app_url+"vendor/";

  public saveRegulationType(reg_type : RegulationType):Observable<RegulationType>
  {
    return this.http.post<RegulationType>(`${this.base_url}`,reg_type);
  }

  public getAllRegulationTypes():Observable<RegulationType[]>{
    return this.http.get<RegulationType[]>(`${this.base_url}`);
  }
}
