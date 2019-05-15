import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { tap } from "rxjs/operators";
import { SocialNetworkUser } from "../core.models";
import { AuthService } from "src/app/core/services/auth.service";

@Injectable({
  providedIn: "root"
})
export class UserService {
  currentUser: SocialNetworkUser;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getUserProfile() {
    return this.http
      .get(`${environment.apiBaseUrl}/user`, {
        headers: {
          Authorization: ` Bearer ${this.authService.authInfo.accessToken}`
        }
      })
      .pipe(tap((user: SocialNetworkUser) => (this.currentUser = user)));
  }
}
