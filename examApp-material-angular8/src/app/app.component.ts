import {Component, Inject, LOCALE_ID, OnInit, PLATFORM_ID, Renderer2} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {NavigationEnd, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {I18n} from '@ngx-translate/i18n-polyfill';

declare const Modernizr;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  isOnline: boolean;

  constructor(private title: Title,
              private meta: Meta,
              private snackBar: MatSnackBar,
              private router: Router,
              private renderer: Renderer2,
              @Inject(DOCUMENT) doc: Document,
              @Inject(LOCALE_ID) locale: string,
              @Inject(PLATFORM_ID) private platformId: object) {
  }

  ngOnInit() {
    this.title.setTitle('온라인 채점');
  }

}
