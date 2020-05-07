import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HomePageComponent} from './home-page.component';
import {configureTestSuite} from 'ng-bullet';
import {LoadingPlaceholderComponent} from '../../shared/components/loading-placeholder/loading-placeholder.component';
import {MockComponent} from 'ng-mocks';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('HomePage', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule
      ],
      declarations: [
        MockComponent(LoadingPlaceholderComponent),
        HomePageComponent
      ],
      providers: [
        {}
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', (() => {
    expect(component).toBeTruthy();
  }));

});
