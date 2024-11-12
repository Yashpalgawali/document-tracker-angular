import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalComponent } from '../GlobalComponents';
import { Observable } from 'rxjs';
import { RegulationHistory } from '../Models/RegulationHistory';

@Injectable({
  providedIn: 'root'
})
export class RegulationHistoryService {

  base_url = GlobalComponent.app_url+"regulationhist/"

  constructor(private http : HttpClient) { }

  public getRegulationHistoryByRegulationId(regid : number ):Observable<RegulationHistory[]>
  {
    return this.http.get<RegulationHistory[]>(`${this.base_url}history/${regid}`);
  }

  public exportRegulationHistoryToExcel(regid : number){
    return this.http.get<any>(`${this.base_url}export/history/${regid}`, { responseType : 'arraybuffer' as 'json'});
  }
}
