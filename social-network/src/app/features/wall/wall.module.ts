import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WallComponent } from "./wall/wall.component";
import { Routes, RouterModule } from "@angular/router";
import { LayoutModule } from "src/app/layout/layout.module";
import { PublisherComponent } from "./publisher/publisher.component";

const routes: Routes = [
  {
    path: "",
    component: WallComponent
  }
];

@NgModule({
  declarations: [WallComponent, PublisherComponent],
  imports: [CommonModule, RouterModule.forChild(routes), LayoutModule]
})
export class WallModule {}
