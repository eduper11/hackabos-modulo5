import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/services/auth.service";
import { MatchPasswordValidator } from "../../validators/match-password.validator";

@Component({
  selector: "sn-register",
  templateUrl: "./register.component.html",
  styleUrls: []
})
export class RegisterComponent {
  registerForm = this.fb.group(
    {
      fullName: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [Validators.required]]
    },
    { validators: MatchPasswordValidator }
  );

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  register() {
    const { fullName, email, password } = this.registerForm.value;

    if (this.registerForm.valid) {
      this.authService
        .register({ fullName, email, password })
        .subscribe(() => this.registerForm.reset());
    }
  }
}
