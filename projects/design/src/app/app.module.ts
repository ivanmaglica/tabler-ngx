import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Design1Component } from './pages/design1/design1.component';
import { TablerLibModule } from 'projects/tabler-lib/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    Design1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TablerLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
