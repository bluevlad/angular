import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {Meta, Title} from '@angular/platform-browser';
import {configureTestSuite} from 'ng-bullet';
import {NavigationEnd, Router} from '@angular/router';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {NgxExampleLibraryComponent} from '@ismaestro/ngx-example-library';
import {of} from 'rxjs';
import {MockComponent} from 'ng-mocks';
import {RouterTestingModule} from '@angular/router/testing';
import {LOCALE_ID, PLATFORM_ID} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const matSnackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MockComponent(HeaderComponent),
        MockComponent(FooterComponent),
        MockComponent(NgxExampleLibraryComponent),
        AppComponent
      ],
      providers: [
        {provide: MatSnackBar, useValue: matSnackBarSpy},
        {provide: Meta, useValue: {}},
        {provide: Title, useValue: {setTitle: () => {}}},
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

});
