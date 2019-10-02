import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IdeTypewriterComponent } from './ide-typewriter/ide-typewriter.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeTypewriterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
