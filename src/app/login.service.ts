import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private apiLink = 'http://localhost:5000/login'

  login(credentials:{email:String,password:String}):Observable<any>{
    return this.http.post(this.apiLink,credentials)
  }

}
