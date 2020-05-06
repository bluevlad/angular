import { RouterModule, Routes } from '@angular/router';

import { MemberListComponent } from './member/list/member-list.component';
import { ExamListComponent } from './exam/list/exam-list.component';

const routes: Routes = [
  { path: 'member-list', component: MemberListComponent },
  { path: 'exam-list', component: ExamListComponent },
];

export const routing = RouterModule.forRoot(routes);
