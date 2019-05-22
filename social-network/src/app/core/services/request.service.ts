import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { tap } from "rxjs/operators";
import { FriendRequestComponent } from "src/app/shared/components/friendrequest/friendrequest.component";

@Injectable({
  providedIn: "root"
})
export class RequestService {
  friendsRequest: FriendRequest[];

  constructor(private http: HttpClient) {}

  getFriendRequest() {
    return this.http
      .get(`${environment.apiBaseUrl}/user/friendrequest`)
      .pipe(
        tap(
          (friendRequest: FriendRequest[]) =>
            (this.friendsRequest = friendRequest.filter(
              friendsrequest => !friendsrequest.request.confirmed
            ))
        )
      );
  }

  acceptFriendRequest(uuid: string) {
    return this.http
      .post(`${environment.apiBaseUrl}/user/friendrequest/accept`, {
        uuid
      })
      .pipe(
        tap(() => {
          this.friendsRequest = this.friendsRequest.filter(
            friendsRequest => friendsRequest.uuid !== uuid
          );
        })
      );
  }
}
