import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ModalService {
  title = "";
  content = "";
  opened = false;

  open(title, content) {
    this.title = title;
    this.content = content;
    this.opened = true;
  }

  close() {
    this.opened = false;
  }
}
