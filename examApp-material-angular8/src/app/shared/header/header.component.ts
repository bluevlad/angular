import {Component, Inject, OnInit} from '@angular/core';
import {APP_CONFIG} from '../../configs/app.config';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  selectedLanguage: string;
  progressBarMode: string;
  currentUrl: string;

  constructor(@Inject(APP_CONFIG) public appConfig: any,
              private cookieService: CookieService,
              private title: Title,
              private router: Router,
              ) {
              }

  ngOnInit() {
  }

}
