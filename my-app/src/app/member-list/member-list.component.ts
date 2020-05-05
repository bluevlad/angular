import { Component, OnInit , Inject} from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from '../service/member.service';

import { Member } from '../model/member';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})

export class MemberListComponent implements OnInit {

  member: Member[];

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
    this.memberService.getMembers()
      .subscribe( data => {
        this.member = data.egovMapList;
      });
  }

}
