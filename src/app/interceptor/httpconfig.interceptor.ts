import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { GlobalVarsService } from '../services/global-vars.service';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class HttpconfigInterceptor implements HttpInterceptor {

  baseApiURI!: string;
  activeRequest = 0;

  constructor(public _globalVarObj: GlobalVarsService) {
    this.baseApiURI = this._globalVarObj.Get_ApiUrl();
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    var token: string = sessionStorage.getItem('adal.idtoken')!;//localStorage.getItem('token');
        request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        request = request.clone({ url: this.baseApiURI + request.url });

        this.activeRequest++;
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));

    }
}
