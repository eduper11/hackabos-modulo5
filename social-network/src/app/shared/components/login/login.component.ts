import { Component } from "@angular/core";
import { Validators, FormBuilder } from "@angular/forms";
import { AuthService } from "src/app/core/services/auth.service";
import { Router } from "@angular/router";
import { UserService } from "src/app/core/services/user.service";

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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        () => {
          this.userService.getUserProfile().subscribe;
          this.router.navigate(["/wall"]);
        },
        // data => console.log(data),
        () => this.loginForm.get("password").setValue("")
      );
    }
  }
}
