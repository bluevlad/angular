import { Component, Input } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

import { ExamService } from '../../service/exam.service';
import { Exam } from '../../model/exam';

@Component({
  selector: 'app-exam-add',
  templateUrl: './exam-add.component.html',
  styleUrls: ['./exam-add.component.css']
})

export class ExamAddComponent {

  constructor(
    private examService: ExamService,
  ) {}

  exam: Exam;

  addExam(examForm: NgForm): void {
//    this.snackBar.open('Cant vote anymore');
    this.examService.createExam(examForm.value.examNm, examForm.value.isUse)
    .then( data => {
      this.exam = data;
    });
  }

}
