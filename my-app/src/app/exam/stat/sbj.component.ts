import { Component, OnInit , Inject} from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from '../../service/exam.service';

import { ExamStat } from '../../model/exam-stat';

@Component({
  selector: 'app-stat-sbj',
  templateUrl: './sbj.component.html',
  styleUrls: ['./sbj.component.css']
})

export class StatSbjComponent implements OnInit {

  examStat: ExamStat[];

  constructor(private router: Router, private examService: ExamService) { }

  ngOnInit() {
    this.examService.getStatSbj()
      .subscribe( data => {
        this.examStat = data.examStatVOList;
      });
  }

}
