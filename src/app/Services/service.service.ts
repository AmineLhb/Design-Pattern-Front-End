import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';   // import
import { Observable } from 'rxjs';
import { Chef } from '../Models/chef.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }


  public saveCommande(form:FormData):Observable<string>{

    return this.http.post<string>("http://localhost:8080/save-commande",form);

  }

  public register(form:FormData):Observable<string>{

    return this.http.post<string>("http://localhost:8080/register",form);

  }

  public getChefs():Observable<any>{

    return this.http.get<Array<Chef>>("http://localhost:8080/chefs");

  }


}
