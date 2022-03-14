import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser } from './login-user';

@Injectable({
  providedIn: 'root'
})
export class LuserService {

  private baseUrl = "http://localhost/8081/loginUser/login"
  constructor(private httpClient: HttpClient) { }

  luser(loginUser:LoginUser):Observable<object>{

    console.log(loginUser)
    return this.httpClient.post('${this.baseUrl}',loginUser);
  }
}
