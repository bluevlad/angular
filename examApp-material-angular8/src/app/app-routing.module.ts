import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Error404PageComponent} from './pages/error404-page/error404-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import { MemberListComponent } from './member/list/member-list.component';
import { MemberAddComponent } from './member/add/member-add.component';
import { ExamListComponent } from './exam/list/exam-list.component';
import { ExamAddComponent } from './exam/add/exam-add.component';
import { ExamRstListComponent } from './exam/rst/rst-list.component';
import { ExamRstViewComponent } from './exam/rst/rst-view.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'member-list', component: MemberListComponent, pathMatch: 'full'},
  {path: 'member-add', component: MemberAddComponent, pathMatch: 'full'},
  {path: 'exam-list', component: ExamListComponent, pathMatch: 'full'},
  {path: 'exam-add', component: ExamAddComponent, pathMatch: 'full'},
  {path: 'exam-rst-list', component: ExamRstListComponent, pathMatch: 'full'},
  {path: 'exam-rst-view', component: ExamRstViewComponent, pathMatch: 'full'},
  {path: 'error404', component: Error404PageComponent},

  // otherwise redirect to 404
  {path: '**', redirectTo: '/error404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
