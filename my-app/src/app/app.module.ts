import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { MemberListComponent } from './member-list/member-list.component';
import { MemberService } from './service/member.service';

import { ExamListComponent } from './exam/list/exam-list.component';
import { ExamService } from './service/exam.service';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
 declarations: [
    AppComponent,
    MemberListComponent,
    ExamListComponent
  ],
  providers: [ MemberService, ExamService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
