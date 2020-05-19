import { Component, OnInit , Inject} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private router: Router, private examService: ExamService) { }

  public examCd: number;
  public sbjCd: number;
  public userId: string;

  ngOnInit() {

    this.route.queryParamMap
    .subscribe(params => {
      this.examCd = +params.get('examCd');
      this.sbjCd = +params.get('sbjCd');
      this.userId = params.get('userId');
    });



    this.examService.getExamRstView(this.examCd, this.sbjCd, this.userId)
      .subscribe( data => {
        this.exam = data.examVOList;
        this.examVw = data.examVO;
      });
  }

}
