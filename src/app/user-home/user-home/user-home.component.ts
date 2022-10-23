import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/common-services/http.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {
  faMagnifyingGlass,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { SharedService } from 'src/app/common-services/shared.service';
import { take } from 'rxjs/operators';
import { userNameUrl } from 'src/app/constants/enpoints';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
})
export class UserHomeComponent implements OnInit {
  facart = faShoppingCart;
  search = faMagnifyingGlass;
  username: any = '';
  constructor(
    private httpService: HttpService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    //this.sharedService.getUserName();
    this.getUserName();
  }

  // private getUserName() {
  //   // console.log('HIIIIIIIIIIIIIII');
  //   const token = sessionStorage.getItem('id_token');
  //   const bearerToken = `Bearer ${token}`;
  //   const options = {
  //     headers: new HttpHeaders({ Authorization: bearerToken }),
  //     responseType: 'text/plain',
  //   };
  //   this.httpService
  //     .doGet(userNameUrl(), options)
  //     .pipe(take(1))
  //     .subscribe((data) => {
  //       // console.log(content, 'username');
  //       this.username = data;
  //     });
  // }

  getUserName() {
    this.userService.getUser().subscribe(
      (data) => {
        this.username = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
