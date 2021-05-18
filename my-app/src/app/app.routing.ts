import { RouterModule, Routes } from '@angular/router';

import { MemberListComponent } from './member-list/member-list.component';
import { ExamListComponent } from './exam/list/exam-list.component';
import { StatSbjComponent } from './exam/stat/sbj.component';
import { ButtonExample } from './material/button/button-example.component';

const routes: Routes = [
  { path: 'member-list', component: MemberListComponent },
  { path: 'exam-list', component: ExamListComponent },
  { path: 'stat-sbj', component: StatSbjComponent },
  { path: 'button-exmaple', component: ButtonExample },
  { path : '', component : ButtonExample }
];

export const routing = RouterModule.forRoot(routes);
