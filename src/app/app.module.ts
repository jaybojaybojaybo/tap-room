import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KegsComponent } from './kegs/kegs.component';
import { KegDetailComponent } from './keg-detail/keg-detail.component';
import { KegService } from './keg.service';
import { MessagesComponent } from './messages/messages.component'
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    KegsComponent,
    KegDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    KegService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
