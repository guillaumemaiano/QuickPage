import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShortcutsComponent } from './shortcuts/shortcuts.component';

@NgModule({
  declarations: [
    AppComponent,
    ShortcutsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
