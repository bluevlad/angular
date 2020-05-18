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
  examVw: Exam;

  displayedColumns: string[] = ['itemNo', 'ans', 'yn', 'passAns'];

  constructor(private router: Router, private examService: ExamService) { }

  ngOnInit() {
    this.examService.getExamRstView('1', '1', 'rainend')
      .subscribe( data => {
        this.exam = data.examVOList;
        this.examVw = data.examVO;
      });
  }

}
