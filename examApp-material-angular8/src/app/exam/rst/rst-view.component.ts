import { Component, OnInit , Inject} from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from '../../service/exam.service';

import { Exam } from '../../model/exam';

@Component({
  selector: 'app-rst-view',
  templateUrl: './rst-view.component.html',
  styleUrls: ['./rst-view.component.css']
})

export class ExamRstViewComponent implements OnInit {

  exam: Exam[];

  displayedColumns: string[] = ['examCd', 'examNm', 'sbjCd', 'sbjNm', 'userId', 'userNm', 'sbjPoint'];

  constructor(private router: Router, private examService: ExamService) { }

  ngOnInit() {
    this.examService.getExamRst()
      .subscribe( data => {
        this.exam = data.examVOList;
      });
  }

}
