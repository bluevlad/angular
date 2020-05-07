import {Component, OnInit} from '@angular/core';
import {AppConfig} from '../../configs/app.config';
import {Observable} from 'rxjs';
import {defaultIfEmpty, map} from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
