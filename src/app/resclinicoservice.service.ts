import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Rooturl} from './rooturl';
import { Observable } from 'rxjs';
import { ResClinico } from '..models/resclinico'

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class ResclinicoService {
 rooturl: Rooturl;
 resclinicoToUpdate: ResClinico;

  constructor(private http:HttpClient)
  {
    this.rooturl = new Rooturl();
  }

  getResClinicos(){
    console.log("getting results");
    let url = this.rooturl.urlResClinico;
    console.log(url);
    return this.http.get(url);
}

updateResClinico(resclinicoToUpdate: ResClinico): Observable<any>{
   let url = this.rooturl.urlResClinico + 'update/';
   return this.http.put({

   })
}
