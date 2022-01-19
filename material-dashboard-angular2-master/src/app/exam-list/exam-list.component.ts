import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from '../model/exam';

import { ExamService } from '../service/exam.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent implements OnInit {

  totalAngularPackages;
  
  exam: Exam[];

  displayedColumns: string[] = ['examCd', 'examNm', 'isUse'];
  
  constructor(private router: Router, private http: HttpClient, private examService: ExamService) { }

    ngOnInit() {
    this.examService.getExam()
      .subscribe( data => {
        this.exam = data.examVOList;
      });
  }

}
