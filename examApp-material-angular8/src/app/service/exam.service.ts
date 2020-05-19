import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/index';

import { ApiResponse } from '../model/api.response';
import { Exam } from '../model/exam';

import { MessageService } from './message.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ExamService {

    constructor(
      private http: HttpClient,
      private messageService: MessageService) {
    }

    private baseUrl = 'http://119.207.157.45:8080/api/exam';

    getExam(): Observable<ApiResponse> {
      return this.http.get<ApiResponse>(this.baseUrl + '/list/');
    }

    createExam(examNm: string, isUse: string): Promise<Exam> {
      const params = new FormData();
      params.append('examNm', examNm);
      params.append('isUse', isUse);
      return this.http
      .post<ApiResponse>(this.baseUrl + '/add/', params)
      .toPromise()
      .then(response => {
        return response.examVOList as Exam;
      })
      .catch(response => {
        alert('[시험 등록 중 오류 발생]\n' + response.error.msg);
        return Promise.reject(response.error.msg);
      });

    }

    getExamRst(): Observable<ApiResponse> {
      return this.http.get<ApiResponse>(this.baseUrl + '/rst/list/');
    }

    getExamRstView(examCd: number, sbjCd: number, userId: string): Observable<ApiResponse> {
      const params = new FormData();
      params.append('examCd', examCd + '');
      params.append('sbjCd', sbjCd + '');
      params.append('userId', userId);
      return this.http.post<ApiResponse>(this.baseUrl + '/rst/view/', params);
    }
}
