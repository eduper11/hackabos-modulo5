import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { SocialNetworkPost } from "../core.models";

@Injectable({
  providedIn: "root"
})
export class WallService {
  myWall: SocialNetworkPost[];

  constructor(private http: HttpClient) {}

  getWall() {
    return this.http
      .get(`${environment.apiBaseUrl}/wall`)
      .pipe(tap(myWall => this.myWall));
  }

  publish(content: string) {
    return this.http
      .post(`${environment.apiBaseUrl}/post`, {
        content
      })
      .pipe(tap((post: SocialNetworkPost) => this.myWall.unshift(post)));
  }

  addComment(postId: string, message: string) {
    return this.http
      .post(`${environment.apiBaseUrl}/post/${postId}/comment`, {
        message
      })
      .pipe(
        tap(() => {
          this.myWall.map(post => {
            if (post.id === postId) {
              post.comments.unshift({
                createdAt: Date.now(),
                message
              });
            }
            return post;
          });
        })
      );
  }
}
