import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth-service/auth.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(private authServic: AuthService) {}
  ///take() used for prevent memory leaks like ng destroy
  ngOnInit(): void {
    this.authServic
      .getToken()
      .pipe(take(1))
      .subscribe(() => {});
  }
}
