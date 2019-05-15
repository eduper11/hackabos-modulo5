import { Component } from "@angular/core";
import { WallService } from "src/app/core/services/wall.service";

@Component({
  selector: "sn-wall-card",
  templateUrl: "./wall-card.component.html",
  styleUrls: ["./wall-card.component.scss"]
})
export class WallCardComponent {
  wallCard = this.wall;

  constructor(private wallService: WallService, private wall) {}
  getWall() {
    this.wallService.getWall(this.wallCard);
  }
}
