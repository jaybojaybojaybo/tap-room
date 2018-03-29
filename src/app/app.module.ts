import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KegsComponent } from './kegs/kegs.component';
import { KegDetailComponent } from './keg-detail/keg-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    KegsComponent,
    KegDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
