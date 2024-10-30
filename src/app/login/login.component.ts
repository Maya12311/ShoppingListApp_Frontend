import { Component } from '@angular/core';
import { AuthenticationRequest } from '../services/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
register() {
throw new Error('Method not implemented.');
}
login() {
throw new Error('Method not implemented.');
}

  authRequest: AuthenticationRequest = {email: '', password: ''};

  errorMsg: Array<string> = [];

}
