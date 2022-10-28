import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selectLang: string = "";
  TransLang: string[] = [];


  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.addLangs(['en', 'hi']);
    translate.use('en');
  }
  setTransLanguage() {
    this.translate.use(this.selectLang);
  }
  getTransLanguage() {
    this.TransLang = [...this.translate.getLangs()];
  }
  ngOnInit(): void {
    this.getTransLanguage();

  }

}
