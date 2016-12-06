import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Component2Component } from './component2/component2.component';
import { AnotherComponent } from './component2/another.component';



@NgModule({
  declarations: [
    AppComponent,
    Component2Component,
    AnotherComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
