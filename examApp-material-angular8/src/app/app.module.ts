import {APP_INITIALIZER, ErrorHandler, LOCALE_ID, NgModule, PLATFORM_ID, TRANSLATIONS} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './modules/core/core.module';
import {AppComponent} from './app.component';
import {APP_CONFIG, AppConfig} from './configs/app.config';
import {SharedModule} from './shared/shared.module';
import {NgxExampleLibraryModule} from '@ismaestro/ngx-example-library';
import {FirebaseModule} from './shared/modules/firebase.module';
import {SentryErrorHandler} from './modules/core/sentry.errorhandler';
import {BrowserModule, ɵgetDOM} from '@angular/platform-browser';
import {I18n} from '@ngx-translate/i18n-polyfill';
import {HttpClientModule} from '@angular/common/http';
import {DOCUMENT, isPlatformBrowser, registerLocaleData} from '@angular/common';
import {CookieModule} from 'ngx-cookie';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ROUTES_CONFIG, RoutesConfig} from './configs/routes.config';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {Error404PageComponent} from './pages/error404-page/error404-page.component';
import {ENDPOINTS_CONFIG, EndpointsConfig} from './configs/endpoints.config';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {RouterModule} from '@angular/router';
import {PrebootModule} from 'preboot';

import { routing } from './app.routing';

import { MemberListComponent } from './member/list/member-list.component';
import { MemberService } from './service/member.service';

import { ExamListComponent } from './exam/list/exam-list.component';
import { ExamService } from './service/exam.service';

declare const require;

export function appInitializer(document: HTMLDocument, platformId: object) {
  return () => {
    if (isPlatformBrowser(platformId)) {
      const dom = ɵgetDOM();
      const styles: any[] = Array.prototype.slice.apply(dom.querySelectorAll(document, `style[ng-transition]`));
      styles.forEach(el => {
        // Remove ng-transition attribute to prevent Angular appInitializerFactory
        // to remove server styles before preboot complete
        el.removeAttribute('ng-transition');
      });
      document.addEventListener('PrebootComplete', () => {
        // After preboot complete, remove the server scripts
        setTimeout(() => styles.forEach(el => dom.remove(el)));
      });
    }
  };
}

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
    NgxExampleLibraryModule.forRoot({
      config: {
        say: 'hello'
      }
    }),
    LazyLoadImageModule.forRoot({}),
    CoreModule,
    SharedModule,
    routing,
  ],
  declarations: [
    HomePageComponent,
    Error404PageComponent,
    AppComponent,
    MemberListComponent,
    ExamListComponent
  ],
  providers: [
    MemberService, ExamService,
    {provide: APP_CONFIG, useValue: AppConfig},
    {provide: ROUTES_CONFIG, useValue: RoutesConfig},
    {provide: ENDPOINTS_CONFIG, useValue: EndpointsConfig},
    {provide: ErrorHandler, useClass: SentryErrorHandler},
    {
      provide: TRANSLATIONS,
      useFactory: (locale) => {
        locale = locale || 'ko';
        return require(`raw-loader!../i18n/messages.${locale}.xlf`);
      },
      deps: [LOCALE_ID]
    },
    I18n,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      deps: [DOCUMENT, PLATFORM_ID],
      multi: true
    }
  ]
})

export class AppModule {
}
