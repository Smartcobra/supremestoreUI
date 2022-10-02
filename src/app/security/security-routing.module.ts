import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
      { path: 'authorized', component: AuthComponent, pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityRoutingModule {}
