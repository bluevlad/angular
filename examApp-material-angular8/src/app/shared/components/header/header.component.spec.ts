import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HeaderComponent} from './header.component';
import {configureTestSuite} from 'ng-bullet';
import {MockComponent} from 'ng-mocks';
import {APP_CONFIG, AppConfig} from '../../../configs/app.config';
import {RouterTestingModule} from '@angular/router/testing';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {CookieService} from 'ngx-cookie';
import {ProgressBarService} from '../../services/progress-bar.service';
import {of} from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const cookieServiceSpy = jasmine.createSpyObj('CookieService', ['get', 'put']);
  const progressBarServiceSpy = jasmine.createSpyObj('ProgressBarService', ['getUpdateProgressBar']);

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatProgressBarModule
      ],
      declarations: [
        HeaderComponent
      ],
      providers: [
        {provide: APP_CONFIG, useValue: AppConfig},
        {provide: ProgressBarService, useValue: progressBarServiceSpy},
        {provide: CookieService, useValue: cookieServiceSpy}
      ]
    });
  });

  beforeEach(() => {
    progressBarServiceSpy.getUpdateProgressBar.and.returnValue(of('query'));

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create header component', (() => {
    expect(component).toBeTruthy();
  }));

});
