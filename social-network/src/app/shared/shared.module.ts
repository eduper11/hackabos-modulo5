import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ValidationMessagesComponent } from "./components/validation-messages/validation-messages.component";
import { HttpClientModule } from "@angular/common/http";
import { MarkAsTouchedDirective } from './directives/mark-as-touched.directive';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ValidationMessagesComponent,
    MarkAsTouchedDirective
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    LoginComponent,
    RegisterComponent,
    ValidationMessagesComponent,
    HttpClientModule
  ]
})
export class SharedModule {}
