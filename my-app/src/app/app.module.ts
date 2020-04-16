import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';

@NgModule({

  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule, // BrowserAnimationsModule 추가
    MatTableModule,

    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
