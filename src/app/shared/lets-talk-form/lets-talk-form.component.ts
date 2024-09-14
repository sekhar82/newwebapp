import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShareService } from '../http-services/share.service';

@Component({
  selector: 'app-lets-talk-form',
  templateUrl: './lets-talk-form.component.html',
  styleUrls: ['./lets-talk-form.component.css']
})
export class LetsTalkFormComponent {
  @Input() isBgRequired: any
  contactForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    location: new FormControl(''),
    message: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    requestFor: new FormControl('', [Validators.required])
  })
  constructor(
    private _s: ShareService
  ) { }
  contactFormSubmit() {
    let template = `<p>Dear Valiant Edge</p>
    <p>Find the below details request to disscussion about services, Plaese Verify</p>
    <br/>
    <table border="1px">
        <caption style="display: table-caption;caption-side:top;text-align:center"><strong>Details</strong></caption>
        <tr><th style="text-align:left;width:50%">First Name</th><td>${this.contactForm.value.firstName}</td></tr>
        <tr><th style="text-align:left;width:50%">Last Name</th><td>${this.contactForm.value.lastName}</td></tr>
        <tr><th style="text-align:left;width:50%">Email Address</th><td>${this.contactForm.value.email}</td></tr>
        <tr><th style="text-align:left;width:50%">Mobile Phone Number</th><td>${this.contactForm.value.phone}</td></tr>
        <tr><th style="text-align:left;width:50%">Location</th><td>${this.contactForm.value.location}</td></tr>
        <tr><th style="text-align:left;width:50%">Requesting For</th><td>${this.contactForm.value.requestFor}</td></tr>
        <tr><th style="text-align:left;width:50%">Message Details</th><td>${this.contactForm.value.message}</td></tr>
    </table>
    <br/>
    <p> Thank You </p>
    <p>Mail Service Valiant Edge</p>
    `
    this._s.sendSESMail("Let’s Talk", template)
    this.contactForm.reset()
  }
}
