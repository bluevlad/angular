import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs/index';

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

        baseUrl = 'http://localhost:8080/api/exam';

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

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ExamService: ${message}`);
  }

}
