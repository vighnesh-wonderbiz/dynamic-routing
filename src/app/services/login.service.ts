import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel, Page } from '../models/generic.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private BASEURI = 'http://192.168.29.242:5000/api';

  constructor(private http: HttpClient) {}
  Login(loginData: LoginModel): Observable<LoginModel> {
    const { email, password } = loginData;
    return this.http.post<LoginModel>(this.BASEURI + '/user/log-in', {
      email,
      password,
    });
  }

  getRoutes(roleId: number): Observable<Page[]> {
    return this.http.get<Page[]>(this.BASEURI + '/accesspage/role/' + roleId);
  }
}
