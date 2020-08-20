import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { JwtService } from '../api/services';
import { LoginDTO } from '../api/models';
import { NotificationBarService } from '../notification-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginCredentials: LoginDTO;
  private errorMessage: String;
  private accountCredentialsForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private jwtService: JwtService, private router: Router, private notificationBarService: NotificationBarService) { }

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
        this.authService.setToken(result);
        this.authService.login(this.accountCredentialsForm.get("username").value);
        this.router.navigateByUrl(this.authService.getRedirectUrl() ? this.router.parseUrl(this.authService.getRedirectUrl()) : '/dressList');
        },
      error => {
        //this.errorMessage = error;
        //this.notificationBarService.openNotificationBar(error);
    })
  }

}
