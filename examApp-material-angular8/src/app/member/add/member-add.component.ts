import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';

import { MemberService } from '../../service/member.service';
import { Member } from '../../model/member';

import {MatSnackBar} from '@angular/material/snack-bar';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})

export class MemberAddComponent {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(
    private router: Router,
    private memberService: MemberService,
    private snackBar: MatSnackBar,
  ) { }

  member: Member[];

  addMember(memberForm: NgForm): void {
//    this.snackBar.open('Cant vote anymore');

    if (memberForm.value.EmployeeID == null) { return; }
    this.memberService.createMember(memberForm.value)
      .subscribe(data => {
        this.member.push();
      });
  }

}
