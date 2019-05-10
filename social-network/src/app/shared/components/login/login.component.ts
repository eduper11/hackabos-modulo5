import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Validators, FormBuilder } from "@angular/forms";
import { environment } from "src/environments/environment";

@Component({
  selector: "sn-login",
  templateUrl: "./login.component.html",
  styleUrls: []
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  login() {
    if (this.loginForm.valid) {
      this.http
        .post(`${environment.apiBaseUrl}/account/login`, this.loginForm.value)
        .subscribe(data => console.log(data));
    }
  }
}
