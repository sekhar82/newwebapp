import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie/lib/symbols';
import * as AOS from 'aos';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ShareService } from '../shared/http-services/share.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  options: AnimationOptions = {
    path: 'assets/Lotts/cloud-computing.json'
  };
  options0: AnimationOptions = {
    path: 'assets/Lotts/website-loading.json'
  };
  options1: AnimationOptions = {
    path: 'assets/Lotts/edge-swipe.json'
  };
  options2: AnimationOptions = {
    path: 'assets/Lotts/cloud-computing (3).json'
  };
  options3: AnimationOptions = {
    path: 'assets/Lotts/blockchain-development.json'
  };
  options4: AnimationOptions = {
    path: 'assets/Lotts/digital-marketing.json'
  };
  card3: any[] = [...Array(3)]
  list: any[] = [
    { isVisible: false, bg: 'red' },
    { isVisible: false, bg: 'green' },
    { isVisible: false, bg: 'blue' },
    { isVisible: false, bg: 'green' },
    { isVisible: false, bg: 'blue' },
    { isVisible: false, bg: 'red' },
  ]
  cards: any[] = [
    { icon: 'assets/icons/Group 96.png', title: 'Application Development', description: 'We create custom software solutions that solve your problems' },
    { icon: 'assets/icons/Group 97.png', title: 'Digital Marketing', description: 'Reach your target audience with digital marketing.' },
    { icon: 'assets/icons/Group 98.png', title: 'Cloud Services', description: 'Ensuring software quality through various tests.' },
    { icon: 'assets/icons/Group 99.png', title: 'UI & UX Design', description: 'We create user interfaces that are easy to use and visually appealing.' }
  ]
  connectForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required])
  })
  tutorial: any;
  constructor(
    private _s: ShareService
  ) { }

  ngOnInit(): void {
    AOS.init();//AOS - 2
    AOS.refresh();
    const box = document.querySelector('.hgfhgjgv');

    document.addEventListener('scroll', () => {
      const rect = box?.getBoundingClientRect();
      const inrht = window.innerHeight
      const top: any = rect?.top
      const bottom: any = rect?.bottom

      console.log(top > inrht ? 'not comming' : inrht > top && inrht < bottom ? 'enter' : inrht > top && top > 0 && inrht > bottom ? 'focus' : top < 0 && bottom > 0 ? 'leaving' : bottom < 0 ? 'exit' : 'na')
    });
  }

  ngAfterViewInit(): void {
    // AOS.init();//AOS - 2
    setTimeout(() => { AOS.refresh(); }, 1000)

  }
  onAnimate(): void {
    // console.log(animationItem);  
  }

  connectFormSubmit() {
    let template = `<p>Dear Valiant Edge</p>
    <p>Find Below details for Connecting Request, Plaese Verify</p>
    <br/>
    <table border="1px">
        <caption style="display: table-caption;caption-side:top;text-align:center"><strong>Details</strong></caption>
        <tr><th style="text-align:left;width:50%">Name</th><td>${this.connectForm.value.name}</td></tr>
        <tr><th style="text-align:left;width:50%">Email Address</th><td>${this.connectForm.value.email}</td></tr>
        <tr><th style="text-align:left;width:50%">Mobile Phone Number</th><td>${this.connectForm.value.mobile}</td></tr>
    </table>
    <br/>
    <p> Thank You </p>
    <p>Mail Service Valiant Edge</p>
    `
    this._s.sendSESMail("Let's Connect", template)
    this.connectForm.reset()
  }
  isInViewport(el: any) {
    const rect = el.getBoundingClientRect();
    console.log(rect)
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
  }
  downloadCompanyDetails() {
    window.open('/assets/pdf/Valiant_Edge_Company_Profile.pdf', '_blank', 'fullscreen=yes')
  }
}
