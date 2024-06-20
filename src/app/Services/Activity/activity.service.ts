import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalComponent } from 'src/app/GlobalComponents';
import { Activity } from 'src/app/Models/Activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  base_url = GlobalComponent.app_url+"activity/"

  constructor(private http : HttpClient) { }

  public getAllActivities():Observable<Activity[]>
  {
    return this.http.get<Activity[]>(`this.base_url`);
  }
}
