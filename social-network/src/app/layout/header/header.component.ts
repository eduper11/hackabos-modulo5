import { Component } from "@angular/core";

@Component({
  selector: "sn-header",
  template: `
    <nav class="navbar navbar-dark bg-primary">
      <a class="navbar-brand" href="#"
        ><i class="fas fa-users"></i>The Social Network</a
      >
    </nav>
  `,
  styles: [
    `
      nav a {
        font-size: 1.5rem;
        font-family: "Permanent Marker", cursive;
      }
    `
  ]
})
export class HeaderComponent {}
