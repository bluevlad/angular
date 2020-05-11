import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MemberService } from '../../service/member.service';
import { Member } from '../../model/member';


@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})

export class MemberAddComponent implements OnInit {

  member: Member[];

  displayedColumns: string[] = ['Id', 'userId', 'userNm', 'emailAdres', 'moblphonNo', 'groupId'];

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {

      this.memberService.getMembers()
      .subscribe( data => {
        this.member = data.egovMapList;
      });

  }


}
