import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';

import { AddMeetingComponent } from './meeting/add-meeting/add-meeting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MeetingListComponent } from './meeting/meeting-list/meeting-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MeetingListComponent,
    AddMeetingComponent,
    MeetingListComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,FormsModule,ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
