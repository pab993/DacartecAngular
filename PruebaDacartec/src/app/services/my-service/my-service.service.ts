import { Claim } from './../../models/claim.model';
import { Detail } from './../../models/detail.model';
import { Data } from './../../models/data.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private _url: string = "https://run.mocky.io/v3/d194eae8-f851-40a8-9342-81f4a9f4ed91";
  private _url_domain: string = "https://run.mocky.io/v3/";

  constructor(private http: HttpClient) { }

  getInfo(): Observable<Data>{
    return this.http.get<Data>(this._url);
  }

  getInfoDetails(_url_relative: string){
    return this.http.get<Detail>(this._url_domain + _url_relative);
  }

}
