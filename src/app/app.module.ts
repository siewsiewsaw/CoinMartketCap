import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { LinechartComponent } from './linechart/linechart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BitcoinComponent,
    LinechartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
