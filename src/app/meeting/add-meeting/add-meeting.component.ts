
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LocalService } from 'src/app/services/local.service';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MeetingListComponent } from '../meeting-list/meeting-list.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-add-meeting',
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.css']
})
export class AddMeetingComponent implements OnInit {
  // fullname:any="";
  // meetingDate:Date = new Date();
  // startTime:Date =new Date();
  // endTime:Date = new Date();
  meetingForm: any;
  // meeting: string|any[]|null|undefined;


  constructor(private localservice: LocalService, private route: Router, private formbuilder: FormBuilder, private meetingList: MeetingListComponent) {

  }
  // 
  // ngOnInit(): void {
  //   this.meetingForm = new FormGroup({'fullname':new FormControl(null,[Validators.required,Validators.minLength(4)]),
  //                                     'meetingDate':new FormControl(null,Validators.required,),
  //                                     'startTime':new FormControl(null,Validators.required),
  //                                     'endTime':new FormControl(null,Validators.required)
  // });
  // }


  ngOnInit(): void {
    this.meetingForm = this.formbuilder.group({
      'fullname': ['', [Validators.required, Validators.minLength(4)]],
      'meetingDate': ['', [Validators.required]],
      'startTime': ['', [Validators.required]],
      'endTime': ['', [Validators.required]],
    });
  }
  createMeeting() {

    console.log(this.meetingForm)
    const meetings: string = this.localservice.getMeetings('meetings') || '[]';
    console.log('meetings', meetings);
    let meetingsArray: object[] = JSON.parse(meetings);
    meetingsArray.push({ fullname: this.meetingForm.get('fullname').value, meetingDate: this.meetingForm.get('meetingDate').value, startTime: this.meetingForm.get('startTime').value, endTime: this.meetingForm.get('endTime').value });
    const meetingJson: string = JSON.stringify(meetingsArray);
    console.log("meetingJson:", meetingJson);
    const result: any = this.localservice.saveMeeting('meetings', meetingJson);
    console.log("meetresultingJson:", result);

    this.meetingList.updateMeetingList();
    this.meetingForm.reset();
    //  this.fullname = '';

  }
  get fullname() {
    return this.meetingForm.get('fullname');
  }
  get meetingDate() {
    return this.meetingForm.get('meetingDate');
  }
  get startTime() {
    return this.meetingForm.get('startTime');
  }
  get endTime() {
    return this.meetingForm.get('endTime');
  }


  cancelSave() {
    this.route.navigate(["/meeting"])
  }
}
