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

  constructor(private http: HttpClient) { }
  baseUrl = 'http://119.207.157.45:8080/api';

    getMembers(): Observable<ApiResponse> {
      return this.http.get<ApiResponse>(this.baseUrl + '/member/list');
    }

    createMember(member: Member): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(this.baseUrl, member);
  }

}
