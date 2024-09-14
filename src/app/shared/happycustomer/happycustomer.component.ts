import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, EffectCoverflow, Pagination]);
@Component({
  selector: 'app-happycustomer',
  templateUrl: './happycustomer.component.html',
  styleUrls: ['./happycustomer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HappycustomerComponent implements OnInit, AfterViewInit {
  cards: any[] = [
    {
      img: 'assets/dummy-profile-pic.jpg', name: 'Naren Kumar', desig: 'CEO, Agrivimaan', content: `I'm confident that Valiant Edge can help any agricultural 
    drone company improve their digital marketing results 
    and website development. They're a great partner and 
    they'll help you achieve your goals.`},
    {
      img: 'assets/dummy-profile-pic.jpg', name: 'Naren Kumar', desig: 'CEO, Opq Tech', content: `The team at Valiant Edge is always willing to go the extra mile 
    to help us achieve our goals. They're always responsive to our 
    questions and requests, and they're always willing to brainstorm 
    new ideas. We really appreciate their dedication and hard work.`},
    {
      img: 'assets/dummy-profile-pic.jpg', name: 'Naren Kumar', desig: 'CEO, One Life Just Go', content: `The team at Valiant Edge is always willing to go the extra 
    mile to help us achieve our goals. They're always responsive 
    to our questions and requests, and they're always willing 
    to brainstorm new ideas. We really appreciate their 
    dedication and hard work.`}
  ]
  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {

  }
}
