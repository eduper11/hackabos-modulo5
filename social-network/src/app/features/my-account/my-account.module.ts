import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyAccountComponent } from "./my-account/my-account.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: MyAccountComponent
  }
];

@NgModule({
  declarations: [MyAccountComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class MyAccountModule {}
