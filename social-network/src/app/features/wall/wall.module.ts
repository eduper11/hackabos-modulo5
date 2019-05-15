import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WallComponent } from "./wall/wall.component";
import { Routes, RouterModule } from "@angular/router";
import { LayoutModule } from "src/app/layout/layout.module";
import { WallCardComponent } from "./wall-card/wall-card.component";

const routes: Routes = [
  {
    path: "",
    component: WallComponent
  }
];

@NgModule({
  declarations: [WallComponent, WallCardComponent],
  imports: [CommonModule, RouterModule.forChild(routes), LayoutModule]
})
export class WallModule {}
