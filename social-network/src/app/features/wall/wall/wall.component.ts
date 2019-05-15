import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/core/services/user.service";
import { WallService } from "src/app/core/services/wall.service";

@Component({
  selector: "sn-wall",
  templateUrl: "./wall.component.html",
  styleUrls: ["./wall.component.scss"]
})
export class WallComponent implements OnInit {
  posts;

  constructor(
    public userService: UserService,
    private wallService: WallService
  ) {} // si le poongo trabajo (el getwall.suscribe en el constructor) en el constructor, el componente va a tardar más en cargar

  ngOnInit() {
    this.wallService.getWall().subscribe(posts => (this.posts = posts));
  }
}
