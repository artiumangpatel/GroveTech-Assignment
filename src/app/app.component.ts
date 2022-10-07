import { Component, OnInit } from '@angular/core';
import { LocalService } from './services/local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'assignment';
  constructor(private localStore:LocalService){}

ngOnInit(): void {
  this.localStore.saveMeeting('id', 'arti');
  console.log('decrpted data ', this.localStore.getMeetings('meetings'));
}
}

