import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {FirebaseModule} from './shared/modules/firebase.module';
import {BrowserModule, ɵgetDOM} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {CookieModule} from 'ngx-cookie';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {Error404PageComponent} from './pages/error404-page/error404-page.component';
import {RouterModule} from '@angular/router';
import {PrebootModule} from 'preboot';
import { routing } from './app.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

/** Material Module을 모두 사용하기 위해서 lib로 참조가능하도록 추가 */
import { MaterialModule } from './shared/modules/material.module';

import { MemberListComponent } from './member/list/member-list.component';
import { MemberAddComponent } from './member/add/member-add.component';
import { MemberService } from './service/member.service';

import { ExamListComponent } from './exam/list/exam-list.component';
import { ExamAddComponent } from './exam/add/exam-add.component';
import { ExamRstListComponent } from './exam/rst/rst-list.component';
import { ExamRstViewComponent } from './exam/rst/rst-view.component';
import { ExamService } from './service/exam.service';

import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

import { MessagesComponent } from './shared/messages/messages.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'angularexampleapp'}),
    PrebootModule.withConfig({appRoot: 'app-root'}),
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CookieModule.forRoot(),
    FirebaseModule,
    SharedModule,
    routing,
    MaterialModule,
    FormsModule, ReactiveFormsModule,
  ],
  declarations: [
    HomePageComponent,
    Error404PageComponent,
    AppComponent,
    MemberListComponent,
    MemberAddComponent,
    ExamListComponent,
    ExamAddComponent,
    ExamRstListComponent,
    ExamRstViewComponent,
    MessagesComponent,
  ],
  providers: [
    MemberService, ExamService,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}

