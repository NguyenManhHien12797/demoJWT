import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";


const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
})

@Injectable()
export class Interceptor implements HttpInterceptor{

  // @ts-ignore
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = JSON.parse(localStorage.getItem('data')!).token;
    console.log(token);
    if(token){
      let myHeaders= headers.set('Authorization', 'Bearer '+ token);
      const AuthRequest = req.clone({headers: myHeaders});
      console.log('MyHeaders: ', myHeaders);
      return next.handle(AuthRequest);
    }
  }

}
