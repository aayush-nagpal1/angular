import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RecentProduct } from './recentProduct/recentProduct.component'

@NgModule({
  declarations: [
    AppComponent,
    RecentProduct
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
