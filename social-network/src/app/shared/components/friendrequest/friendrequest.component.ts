import { Component, OnInit } from "@angular/core";
import { RequestService } from "src/app/core/services/request.service";

@Component({
  selector: "sn-friendrequest",
  templateUrl: "./friendrequest.component.html",
  styleUrls: ["./friendrequest.component.scss"]
})
export class FriendRequestComponent implements OnInit {
  constructor(public requestService: RequestService) {}

  ngOnInit() {
    this.requestService.getFriendRequest().subscribe();
  }
}
