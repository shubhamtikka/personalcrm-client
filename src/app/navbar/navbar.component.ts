import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isMenuOpen: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private jwtService: JwtClientService) {}

  ngOnInit(): void {
    console.log('Here..');
    console.log('Before -' + this.isLoggedIn);
    this.isLoggedIn = this.jwtService.isLoggedIn();
    console.log('After -' + this.isLoggedIn);
  }

  logout() {
    this.jwtService.logout();
    this.isLoggedIn = false;
  }
}
