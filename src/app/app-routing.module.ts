import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './security/login/login.component';

const routes: Routes = [
  {
    path: 'authorized',
    loadChildren: () =>
      import('src/app/security/security.module').then((m) => m.SecurityModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('src/app/user-home/user-home.module').then(
        (m) => m.UserHomeModule
      ),
  },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// const routes = [
//   { path: 'home', component: HomeComponent, pathMatch: 'full'},
//   { path: 'auth', component: AuthComponent, pathMatch: 'full'},
//   { path: '', redirectTo: "auth", pathMatch: 'full'},
//   { path: 'authorized', redirectTo: "auth", pathMatch: 'full'},
//   { path: 'login', component: LoginComponent, pathMatch: 'full'}
// ];
