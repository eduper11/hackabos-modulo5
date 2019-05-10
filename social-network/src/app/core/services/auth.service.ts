import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login({ email, password }) {
    return this.http.post(
      `${environment.apiBaseUrl}/account/login`,
      email,
      password
    );
  }

  register({ fullName, email, password }) {
    return this.http.post(`${environment.apiBaseUrl}/account`, {
      fullName,
      email,
      password
    });
  }
}
