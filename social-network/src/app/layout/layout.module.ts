import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../layout/header/header.component";
import { FooterComponent } from "../layout/footer/footer.component";
import { RouterModule } from "@angular/router";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { ModalComponent } from "./modal/modal.component";
import { SharedModule } from "../shared/shared.module";
import { ToastComponent } from "./toast/toast.component";
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    ModalComponent,
    ToastComponent
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    ModalComponent,
    ToastComponent
  ]
})
export class LayoutModule {}
