import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ValidationMessagesComponent } from "./components/validation-messages/validation-messages.component";
import { HttpClientModule } from "@angular/common/http";
import { MarkAsTouchedDirective } from "./directives/mark-as-touched.directive";
import { NavComponent } from "./components/nav/nav/nav.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ValidationMessagesComponent,
    MarkAsTouchedDirective,
    NavComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [
    LoginComponent,
    RegisterComponent,
    ValidationMessagesComponent,
    HttpClientModule,
    NavComponent
  ]
})
export class SharedModule {}
