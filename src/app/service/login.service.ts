import { Injectable } from '@angular/core';
import {Acc} from "../model/acc";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions: any;

  constructor(private http: HttpClient) {


    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      'Access-Control-Allow-Origin': 'http://localhost:4200/',
      'Access-Control-Allow-Origin-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
  }


  login(obj: any): Observable<any> {
    return this.http.post<{ data: any }>('http://localhost:8080/login',JSON.stringify(obj), this.httpOptions);
  }

  getAllPost(): Observable<any>{
    // let tk = JSON.parse(localStorage.getItem("data")!);
    // let token = 'Bearer ' +tk.token;
    // const headers = new HttpHeaders().set("Authorization", token);
    return this.http.get<{list: any}>('http://localhost:8080/posts');
    // return this.http.get<{list: any}>('http://localhost:8080/posts', {headers});
  }

  public isAuthenticated(): boolean{
    const token = JSON.parse(localStorage.getItem("data")!).token;

    console.log(token)
    // console.log(!this.jwtHelper.isTokenExpired(token))
    return true;
  }

}
