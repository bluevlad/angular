import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/index';

import { ApiResponse } from '../model/api.response';
import { Member } from '../model/member';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MemberService {
  member: Member;

    constructor(private http: HttpClient) { }
    baseUrl = 'http://localhost:8080/api/member/';

    getMembers(): Observable<ApiResponse> {
      return this.http.get<ApiResponse>(this.baseUrl + '/list/');
    }

    createMember(member) {
      const body = JSON.stringify(member);
      return this.http.put(this.baseUrl + '/add/', body, httpOptions).pipe(res => res.pipe())
      ;
  }

}
