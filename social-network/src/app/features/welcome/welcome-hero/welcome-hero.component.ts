import { Component, Input } from "@angular/core";

@Component({
  selector: "sn-welcome-hero",
  templateUrl: "./welcome-hero.component.html"
})
export class WelcomeHeroComponent {
  @Input() rows;

  getIconColor(row) {
    if (row.id === 2) {
      return "green";
    }
  }
}
