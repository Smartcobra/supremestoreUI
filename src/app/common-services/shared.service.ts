import { Injectable } from '@angular/core';
import { userNameUrl } from 'src/app/constants/enpoints';
import { take } from 'rxjs/operators';
import { HttpService } from 'src/app/common-services/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  showLogin = false;
  constructor(private httpService: HttpService) {
    // this.getToken();
  }

  // getUserName() {
  //   const options = {
  //     headers: new HttpHeaders({}),
  //     responseType: 'text/plain',
  //   };
  //   this.httpService
  //     .doGet(userNameUrl(), options)
  //     .pipe(take(1))
  //     .subscribe((content) => {
  //       console.log(content, 'username');
  //     });
  // }
  // private getToken() {
  //   const token = sessionStorage.getItem('id_token');
  //   const bearerToken = `Bearer ${token}`;
  //   const options = {
  //     headers: new HttpHeaders({ Authorization: bearerToken }),
  //     responseType: 'text/plain',
  //   };
  // }
}
