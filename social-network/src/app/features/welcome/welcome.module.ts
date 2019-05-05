import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WelcomeComponent } from "./welcome/welcome.component";
import { Routes, RouterModule } from "@angular/router";
import { WelcomeHeroComponent } from "./welcome-hero/welcome-hero.component";
import { WelcomeFormsComponent } from "./welcome-forms/welcome-forms.component";

const routes: Routes = [
  {
    path: "welcome",
    component: WelcomeComponent
  },
  {
    path: "welcome",
    component: WelcomeFormsComponent
  },
  {
    path: "welcome",
    component: WelcomeHeroComponent
  }
];

@NgModule({
  declarations: [WelcomeComponent, WelcomeHeroComponent, WelcomeFormsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class WelcomeModule {}
