import {NgModule} from '@angular/core';
import {MaterialModule} from './modules/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgxExampleLibraryModule} from '@ismaestro/ngx-example-library';
import {NgxScrollToFirstInvalidModule} from '@ismaestro/ngx-scroll-to-first-invalid';
import {LazyLoadImageModule} from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule,
    NgxExampleLibraryModule,
    NgxScrollToFirstInvalidModule,
    LazyLoadImageModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    NgxExampleLibraryModule,
    HeaderComponent,
    FooterComponent,
    NgxScrollToFirstInvalidModule,
    LazyLoadImageModule,
  ]
})

export class SharedModule {
}
