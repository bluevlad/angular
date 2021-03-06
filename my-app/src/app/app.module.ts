import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { StatSbjComponent } from './exam/stat/sbj.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
 declarations: [
    AppComponent,
    MemberListComponent,
    ExamListComponent,
    StatSbjComponent,
  ],
  providers: [ MemberService, ExamService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
