// logging.interceptor.ts
import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpResponse,
    HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, retry, tap } from 'rxjs/operators';
import { AlertService } from '../services/alert/alert.service';

@Injectable()
export class LoggingInterceptorService implements HttpInterceptor {
    constructor(private serv:AlertService) { }
    intercept(req:HttpRequest<any>,next:HttpHandler){
    let msg:string="";
    let reqStartDate=Date.now();
    return next.handle(req).pipe(
    retry(2),
    catchError(err=>this.handleError(err)),
    tap(
    event=>{
    if(event instanceof HttpResponse){
    this.serv.createAlert(event.body.message);
    msg='succeeded with status:'+event.status+": "+event.statusText;
    }
    else{
    msg="";
    }},
    error=>msg=error.error+"with status:"+error.status+" and status text:"+error.statusText
    ),
    finalize(()=>{
    console.log(
    req.url +": "+msg+"!."+"\n Request completed in"+(Date.now()-reqStartDate)+ "ms")
    }))}
    handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
    this.serv.createAlert(error.error?.message);
    }
    else{
    this.serv.createAlert(error.error);
    }
    return throwError(error);
    }
    }