import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from 'src/app/common-services/http.service';
import {
  faMagnifyingGlass,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { SharedService } from 'src/app/common-services/shared.service';
import { take } from 'rxjs/operators';
import { userNameUrl } from 'src/app/constants/enpoints';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
})
export class UserHomeComponent implements OnInit {
  facart = faShoppingCart;
  search = faMagnifyingGlass;
  username: any = '';
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    //this.sharedService.getUserName();
    this.getUserName();
  }

  private getUserName() {
    // console.log('HIIIIIIIIIIIIIII');
    const token = sessionStorage.getItem('id_token');
    const bearerToken = `Bearer ${token}`;
    const options = {
      headers: new HttpHeaders({ Authorization: bearerToken }),
      responseType: 'text/plain',
    };
    this.httpService
      .doGet(userNameUrl(), options)
      .pipe(take(1))
      .subscribe((data) => {
        // console.log(content, 'username');
        this.username = data;
      });
  }
}
