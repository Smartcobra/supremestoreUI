import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHomeRoutingModule } from './user-home-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [UserHomeComponent],
  imports: [CommonModule, UserHomeRoutingModule, FontAwesomeModule],
})
export class UserHomeModule {}
