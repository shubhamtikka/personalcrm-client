import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtClientService } from './jwt-client.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private jwtClientService: JwtClientService
  ) {}

  canActivate(): boolean {
    const isAuthenticated = this.jwtClientService.isLoggedIn();
    if (!isAuthenticated) {
      this.router.navigate(['/login']); // Redirect to the login page
    }
    return isAuthenticated;
  }
}
