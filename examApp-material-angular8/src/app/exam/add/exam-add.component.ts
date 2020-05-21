import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm} from '@angular/forms';

import { ExamService } from '../../service/exam.service';

@Component({
  selector: 'app-exam-add',
  templateUrl: './exam-add.component.html',
  styleUrls: ['./exam-add.component.css']
})

export class ExamAddComponent {

  examForm: FormGroup;

  constructor(
    private examService: ExamService,
) {
    this.examForm = new FormGroup({
      examNm: new FormControl('', [Validators.required]),
      isUse: new FormControl('', )
    });
  }

  addExam() {
    this.examService.createExam(this.examForm.value.examNm, this.examForm.value.isUse);
  }

}
