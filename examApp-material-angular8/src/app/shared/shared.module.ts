import {NgModule} from '@angular/core';
import {MaterialModule} from './modules/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgxExampleLibraryModule} from '@ismaestro/ngx-example-library';
import {NgxScrollToFirstInvalidModule} from '@ismaestro/ngx-scroll-to-first-invalid';
import {CapitalizeFirstPipe} from './pipes/capitalize-first.pipe';
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
    CapitalizeFirstPipe,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    NgxExampleLibraryModule,
    HeaderComponent,
    FooterComponent,
    NgxScrollToFirstInvalidModule,
    CapitalizeFirstPipe,
    LazyLoadImageModule,
  ]
})

export class SharedModule {
}
