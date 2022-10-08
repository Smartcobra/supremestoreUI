import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth-service/auth.service';
import { take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.getAuthorizationCode();
  }
  ///take(1) used for prevent memory leaks like ng destroy
  ///alternate ngOndestroy()
  ngOnInit(): void {
    //   console.log('hiiiiiiiiiiiii');
    this.authService
      .getToken()
      .pipe(take(1))
      .subscribe((tokens) => {
        if ((tokens as any)?.id_token) {
          sessionStorage.setItem('id_token', (tokens as any).id_token);
          sessionStorage.setItem(
            'refresh_token',
            (tokens as any).refresh_token
          );
          this.router.navigate(['/user/user-home']);
        }
      });
  }

  getAuthorizationCode() {
    this.activateRoute.queryParams.subscribe((params) => {
      if (params?.['code']) {
        this.authService.code = params['code'];
      }
    });
  }
}
