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
    public wallService: WallService
  ) {} // si le poongo trabajo (el getwall.suscribe en el constructor) en el constructor, el componente va a tardar más en cargar

  ngOnInit() {
    this.wallService.getWall().subscribe(); //suscribirse en el último paso siempre, no en el servicio, si no no va a dejar hacer modificaciones en ese objeto
  }                                   //posts => (this.posts = posts) si no quisieramos guardar los post en el servicio

  addPost(content) {
    this.wallService.publish(content).subscribe();
  }

  addComment(postId, message) {
    this.wallService.addComment(postId, message).subscribe();
  }
}
