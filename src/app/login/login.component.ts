import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';
import { AuthenticationRequest } from '../model/AuthenticationRequest';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  isFormValid: boolean = true;
  incorrectCredentials: boolean = false;

  constructor(
    private jwtClientService: JwtClientService,
    private router: Router,
    private header: NavbarComponent
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.username == '' || this.password == '') {
      this.isFormValid = false; // Update the variable if the form is invalid
      return; // Don't Continue
    } else {
      this.isFormValid = true;
    }
    const authRequest = new AuthenticationRequest(this.username, this.password);
    //this.getJwtToken(authRequest);
    this.jwtClientService.login(authRequest).subscribe({
      next: (response: any) => {
        console.log(response);
        localStorage.setItem('access_token', response.token);
        this.router.navigate(['home']);
        this.header.ngOnInit();
      },
      error: (error) => {
        this.incorrectCredentials = true;
      },
    });
  }

  public getJwtToken(authRequest: AuthenticationRequest) {}
}
