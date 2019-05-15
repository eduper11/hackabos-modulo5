import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { SocialNetworkPost } from "../core.models";

@Injectable({
  providedIn: "root"
})
export class WallService {
  myWall: [];

  constructor(private http: HttpClient) {}

  getWall() {
    return this.http
      .get(`${environment.apiBaseUrl}/wall`)
      .pipe(tap(myWall => this.myWall));
  }
}
