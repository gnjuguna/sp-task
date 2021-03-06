import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /**
   * Function gets banner data from banner url
   * @returns returns observable banner data
   */

  getBanner(): any {
    return this.http.get(environment.bannerUrl);
  }

}
