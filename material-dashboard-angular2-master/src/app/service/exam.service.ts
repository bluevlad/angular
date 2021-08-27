import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/index';

import { ApiResponse } from '../model/api.response';
import { Exam } from '../model/exam';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', observe: 'body', responseType: 'json'})
};

@Injectable()
export class ExamService {

    constructor(private http: HttpClient) { }
        baseUrl = 'http://127.0.0.1/api';

    getExam(): Observable<ApiResponse> {
      return this.http.get<ApiResponse>(this.baseUrl + '/academy/exam/ExamMstList');
    }

    createExam(exam: Exam): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(this.baseUrl, exam);
  }

}
