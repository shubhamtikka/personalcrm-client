import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';
import { Router } from '@angular/router';
import { RegisterRequest } from '../model/RegisterRequest';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerRequest: RegisterRequest = new RegisterRequest();
  confirmPassword: string = '';

  constructor(
    private jwtClientService: JwtClientService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  register() {
    if (this.registerRequest.isValid()) {
      this.jwtClientService.register(this.registerRequest).subscribe({
        next: (response: any) => {
          this.router.navigate(['login']);
        },
        error: (error) => {
          console.log('Some error occured');
        },
      });
    } else {
      console.log('Please fill all');
    }
  }
}
