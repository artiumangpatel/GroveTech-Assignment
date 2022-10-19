import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMeetingComponent } from './meeting/add-meeting/add-meeting.component';

import { MeetingListComponent } from './meeting/meeting-list/meeting-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'meeting', pathMatch: 'full' },
  {
    path: 'meeting', component: MeetingListComponent,
    children: [{
      path: 'add', component: AddMeetingComponent
    }]
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
