import {Component, Inject, OnInit} from '@angular/core';
import {APP_CONFIG} from '../../../configs/app.config';
import {ProgressBarService} from '../../services/progress-bar.service';
import {NavigationEnd, Router} from '@angular/router';
import {CookieService} from 'ngx-cookie';

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
              private progressBarService: ProgressBarService,
              private cookieService: CookieService,
              private router: Router) { }

  ngOnInit() {
    this.progressBarService.getUpdateProgressBar().subscribe((mode: string) => {
      this.progressBarMode = mode;
    });

  }

}
