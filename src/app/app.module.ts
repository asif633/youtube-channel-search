import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VideoItemComponent } from './video-item/video-item.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {GoTopButtonModule} from 'ng2-go-top-button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    VideoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpModule,
    InfiniteScrollModule,
    GoTopButtonModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
