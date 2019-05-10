import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WelcomeComponent } from "./welcome/welcome.component";
import { Routes, RouterModule } from "@angular/router";
import { WelcomeHeroComponent } from "./welcome-hero/welcome-hero.component";
import { WelcomeFormsComponent } from "./welcome-forms/welcome-forms.component";
import { SharedModule } from "src/app/shared/shared.module";

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent
  },
  {
    path: "",
    component: WelcomeFormsComponent
  },
  {
    path: "",
    component: WelcomeHeroComponent
  }
];

@NgModule({
  declarations: [WelcomeComponent, WelcomeHeroComponent, WelcomeFormsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class WelcomeModule {}
