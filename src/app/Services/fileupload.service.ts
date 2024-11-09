import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalComponent } from '../GlobalComponents';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {
  base_url = GlobalComponent.app_url+"fileupload/"

  constructor(private http : HttpClient) { }

  public saveRegulation(fileupload : FormData):Observable<any>
  {
    return this.http.post<any>(this.base_url,fileupload);
  }
}
