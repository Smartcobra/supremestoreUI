import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth-service/auth.service';
import { take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import {
  faMagnifyingGlass,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  facart = faShoppingCart;
  search = faMagnifyingGlass;
  show!: boolean;
  constructor(
    private authServic: AuthService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.getAuthorizationCode();
  }
  ///take() used for prevent memory leaks like ng destroy
  ngOnInit(): void {
    this.authServic
      .getToken()
      .pipe(take(1))
      .subscribe((tokens) => {
        if ((tokens as any)?.id_token) {
          sessionStorage.setItem('id_token', (tokens as any).id_token);
          sessionStorage.setItem(
            'refresh_token',
            (tokens as any).refresh_token
          );
          this.router.navigate(['/home']);
        }
      });
  }

  getAuthorizationCode() {
    this.activateRoute.queryParams.subscribe((params) => {
      if (params?.['code']) {
        this.authServic.code = params['code'];
      }
    });
  }
}
