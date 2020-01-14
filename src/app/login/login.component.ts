import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { JwtService } from '../api/services';
import { LoginDTO } from '../api/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginCredentials: LoginDTO;
  private accountCredentialsForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private jwtService: JwtService, private router: Router) { }

  ngOnInit() {
  }

  submitForm(): void {
    if (this.accountCredentialsForm.valid) {
      this.loginCredentials = this.accountCredentialsForm.value;
      this.login();
    }
  }

  login(): void {

    this.jwtService.postJwt(this.loginCredentials).subscribe(
      result => {
        this.authService.login(result).subscribe(() => {
          if(this.authService.isLoggedIn) {
            let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/customerList';
            this.router.navigateByUrl(redirect);
          }
        });
      }
    )
  }

}
