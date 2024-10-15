import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalComponent } from '../GlobalComponents';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  base_url = GlobalComponent.app_url+"users/";


  public changePassword(userid : any , password  :any):Observable<string>
  {
   return this.http.post<string>(``,'');
  }

}
