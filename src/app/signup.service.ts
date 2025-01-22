import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class SignupService {

  constructor(private http: HttpClient) { }

  private apiLink = 'http://localhost:5000/signup'

  signup(credentials:{email:String,phone:String,password:String}):Observable<any>{
    return this.http.post(this.apiLink,credentials)
  }

}
