import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/index';

import { ApiResponse } from '../model/api.response';
import { Exam } from '../model/exam';
import { ExamStat } from '../model/exam-stat';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ExamService {

    constructor(private http: HttpClient) { }
        baseUrl = 'http://119.207.157.45:8080/api';

    getExam(): Observable<ApiResponse> {
      return this.http.get<ApiResponse>(this.baseUrl + '/exam/list/');
    }

    getStatSbj(): Observable<ApiResponse> {
      return this.http.get<ApiResponse>(this.baseUrl + '/exam/stat/sbj/');
    }

    createExam(exam: Exam): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(this.baseUrl, exam);
  }

}
