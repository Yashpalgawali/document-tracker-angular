import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalComponent } from 'src/app/GlobalComponents';
import { Regulation } from 'src/app/Models/Regulation';

@Injectable({
  providedIn: 'root'
})
export class RegulationService {

  base_url = GlobalComponent.app_url+"regulation/"

  constructor(private http : HttpClient) { }

  public saveRegulation(regulation : FormData):Observable<any>
  {
    return this.http.post(this.base_url,regulation);
  }

  public saveRegulationUsingObject(regulation : Regulation):Observable<any>
  {
    return this.http.post(this.base_url,regulation);
  }

  public getAllRegulation():Observable<Regulation[]>
  {
    return this.http.get<Regulation[]>(`${this.base_url}`);
  }

  public getRegulationbyId(rid : number)
  {
    return this.http.get<Regulation>(`${this.base_url}${rid}`);
  }
}
