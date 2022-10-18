import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpService } from 'src/app/common-services/http.service';
import tokenUrl from 'src/app/constants/token';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public code: string = '';

  constructor(private httpService: HttpService) {}

  getToken() {
    console.log('get token');
    const mockUserClient = 'client';
    const mockUserSecret = 'password';
    const basicAuth =
      `Basic ` +
      Buffer.from(`${mockUserClient}:${mockUserSecret}`).toString('base64');
    const headers = new HttpHeaders({
      //  'content-type': '*',
      'Access-Control-Allow-Origin': '*',
      Authorization: basicAuth,
    });
    const options = {
      headers: headers,
    };

    return this.httpService.doPost(tokenUrl(this.code), null, options);
  }
}
