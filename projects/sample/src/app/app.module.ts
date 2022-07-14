import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxSamplepublishingModule} from 'ngx-samplepublishing';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    NgxSamplepublishingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
