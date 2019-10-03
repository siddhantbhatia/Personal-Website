import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IdeTypewriterComponent } from './ide-typewriter/ide-typewriter.component';
import { DescriptionComponent } from './description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeTypewriterComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
