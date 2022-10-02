import { Component, Input, OnInit, HostListener, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/common-services/shared.service';
import redirectUrl from 'src/app/constants/redirect';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() show: any;
  /// show: any;

  // constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    // console.log('show', this.show);
  }

  redirect() {
    console.log('rerndjdfjdsfbdsf ');
    window.location.href = redirectUrl();
  }
}
