import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(req: { clone: (arg0: { headers: any; }) => any; headers: { set: (arg0: string, arg1: string) => any; }; }, next: { handle: (arg0: any) => any; }) {
   
      if(localStorage.getItem("token") == null){
        return next.handle(req)
      }
    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      }
    )
    console.log(tokenizedReq)
    return next.handle(tokenizedReq)

  }
}
