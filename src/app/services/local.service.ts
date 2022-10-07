import { Injectable } from '@angular/core';

import  *  as CryptoJS from  'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class LocalService {

   
  secretkey="artiumangpatel";
  constructor() { }
  
  public saveMeeting(key: string, value: string) {
    //  const meetigs=[{key:value}];
    value = this.encrypt(value);
    localStorage.setItem(key, value);
  }

  // public save(meeting:Meeting) {
    //   let encryptedMeeting  = this.encrypt(JSON.stringify(meeting));
    //   this.meetingsArray = localStorage.getItem("meetings"); 
    //   localStorage.setItem("meetings", encryptedMeeting);
    // }

  public getMeetings(key: string) {
    const value = localStorage.getItem(key) || ' ';
    console.log(value)
    return this.decrypt(value);
    // return value;
  }
  // public removeData(key: string) {
  //   localStorage.removeItem(key);
  // }

  // public clearData() {
  //   localStorage.clear();
  // }
  
  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.secretkey).toString();
  }

  private decrypt(txtToDecrypt: string) {
    console.log(txtToDecrypt)
    return CryptoJS.AES.decrypt(txtToDecrypt, this.secretkey).toString(CryptoJS.enc.Utf8);
  }
}
