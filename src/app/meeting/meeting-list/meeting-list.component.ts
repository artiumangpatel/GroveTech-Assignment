import { AfterViewInit, Component, OnInit } from '@angular/core';

import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent implements OnInit ,AfterViewInit{
  constructor(private localService:LocalService) { }
  meetingList:any[] = [];
  ngOnInit(): void {
    this.meetingList = JSON.parse(this.localService.getMeetings('meetings'));
    console.log(this.meetingList);
  }
  ngAfterViewInit():void{
    
   
  }

}
