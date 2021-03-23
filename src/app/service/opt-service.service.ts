import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class OptServiceService {
  public headerDist: any;
  public requestOptions: any;
  public url: String = environment.url;
  constructor(private http: HttpClient, private _router: Router, private toastr: ToastrService) {

    this.url = environment.url;

  }


  getAll(url: string) {
    return this.http.get(this.url + url);
  }


  postData(url: string, data: any) {
    return this.http.post(this.url + url, data)
  }

  showSuccess(message: string | undefined, title: string | undefined) {
    this.toastr.success(message, title)
  }

  updateData(url: string, data: any) {
    return this.http.put(this.url + url, data)
  }
  showError(message: string | undefined, title: string | undefined) {
    this.toastr.error(message, title)
  }



}
