import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  facart = faShoppingCart;
  search = faMagnifyingGlass;
  show!: boolean;

  constructor(private router: Router) {
    this.show = false;
  }

  ngOnInit(): void {}

  loginModal() {
    this.router.navigateByUrl('/login');
  }
}
