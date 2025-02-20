import { Injectable } from "@angular/core";
import { enviroment } from "../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Member } from "../_models/member";


@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = enviroment.apiUrl;

  constructor(private http: HttpClient){ }
  getMembers() {
    return this.http.get<Member[]>(this.baseUrl + 'users' )
  }

  getMember(username: string) {
    return this.http.get<Member>(this.baseUrl + 'users/' + username )
  }
}
