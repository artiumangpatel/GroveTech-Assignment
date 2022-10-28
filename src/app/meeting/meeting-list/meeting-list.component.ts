import { AfterViewInit, Component, OnInit } from '@angular/core';
import { format } from 'crypto-js';

import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent implements OnInit {
  constructor(private localService: LocalService) { }
  meetingList: any[] = [];
  ngOnInit(): void {
    this.meetingList = JSON.parse(this.localService.getMeetings('meetings'));
    console.log(this.meetingList);
  }
  updateMeetingList() {
    this.meetingList = JSON.parse(this.localService.getMeetings('meetings'));


  }

}
