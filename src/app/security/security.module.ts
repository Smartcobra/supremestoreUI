import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityRoutingModule } from './security-routing.module';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { authInterceptorProviders } from './common/http-interceptor.service';

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [CommonModule, SecurityRoutingModule, HttpClientModule],
  exports: [LoginComponent],
  providers: [authInterceptorProviders],
})
export class SecurityModule {}
