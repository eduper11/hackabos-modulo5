import { Component } from "@angular/core";

@Component({
  selector: "sn-welcome",
  templateUrl: "./welcome.component.html",
  styles: [
    `
      .container-fluid {
        display: block;
        height: 100%;
      }
    `
  ]
})
export class WelcomeComponent {
  heroItems = [
    { id: 1, icon: "fa fa-search", message: "Find people like you" },
    { id: 1, icon: "fa fa-users", message: "Build you friends network" },
    { id: 1, icon: "fa fa-comments", message: "Keep in touch" }
  ];
}
