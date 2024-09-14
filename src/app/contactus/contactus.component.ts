import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShareService } from '../shared/http-services/share.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  mapCenter = { lat: 15.1540305, lng: 76.9355466 }
  mapOptions = {
    zoom: 12,
    center: this.mapCenter,
    mapTypeId: 'roadmap'
  };
  label = {
    text: 'Valiant Edge', color: 'black', fontSize: "20px",
    fontWeight: "bolder"
  }
  mapposition = { lat: 15.1540305, lng: 76.9355466 }
  emailAddress: string = ''
  messageForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required])
  })
  isInvalidEmail: boolean = true;
  constructor(
    private _s: ShareService
  ) { }
  sendMessage() {
    let template = `<p>Dear Valiant Edge</p>
    <p>Want to touch with below details, Plaese Verify</p>
    <br/>
    <table border="1px">
        <caption style="display: table-caption;caption-side:top;text-align:center"><strong>Details</strong></caption>
        <tr><th style="text-align:left;width:50%">Name</th><td>${this.messageForm.value.name}</td></tr>
        <tr><th style="text-align:left;width:50%">Email Address</th><td>${this.messageForm.value.email}</td></tr>
        <tr><th style="text-align:left;width:50%">Message Details</th><td>${this.messageForm.value.message}</td></tr>
    </table>
    <br/>
    <p> Thank You </p>
    <p>Mail Service Valiant Edge</p>
    `
    this._s.sendSESMail("Get In Touch", template)
  }
  validateEmail() {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (regexEmail.test(this.emailAddress)) {
      this.isInvalidEmail = false
    } else {
      this.isInvalidEmail = true
    }
  }
  sendEmail() {
    if (this.isInvalidEmail) {
      return
    }
    let template = `
    <p>Dear Valiant Edge</p>
    <p>News Letter requesting from email: ${this.emailAddress}, Please Verify</p>
    <br/>
    <p> Thank You </p>
    <p>Mail Service Valiant Edge</p>
    `
    this._s.sendSESMail("News Letter", template)
    this.emailAddress = ''
    this.isInvalidEmail = true
  }
}
