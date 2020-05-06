import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/index';

import { ApiResponse } from '../model/api.response';
import { Exam } from '../model/exam';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ExamService {

    constructor(private http: HttpClient) { }
        baseUrl = 'http://localhost:8080/api/exam/list/';

    getExam(): Observable<ApiResponse> {
      return this.http.get<ApiResponse>(this.baseUrl);
    }

    createExam(exam: Exam): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(this.baseUrl, exam);
  }

}
