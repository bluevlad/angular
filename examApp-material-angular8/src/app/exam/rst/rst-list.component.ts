import { Component, OnInit , Inject} from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from '../../service/exam.service';

import { Exam } from '../../model/exam';

@Component({
  selector: 'app-rst-list',
  templateUrl: './rst-list.component.html',
  styleUrls: ['./rst-list.component.css']
})

export class ExamRstListComponent implements OnInit {

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
