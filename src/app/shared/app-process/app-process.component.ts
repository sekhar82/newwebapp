import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay, Pagination, Navigation, Swiper, Virtual } from "swiper";
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Autoplay, Pagination, Navigation, Virtual]);
@Component({
  selector: 'app-app-process',
  templateUrl: './app-process.component.html',
  styleUrls: ['./app-process.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppProcessComponent {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  cards:any[] = [
    {name:'UX Process',description:`We craft intuitive, robust websites 
    with Pixel-perfect designs.`,icon:'assets/icons/Layer_1.png'},
    {name:'Design',description:`Our designs follow the architecture 
    and principles of HIG for iOS`,icon:'assets/icons/Group (5).png'},
    {name:'Development',description:`The development stage of your 
    e-commerce website is safe in 
    our hands.`,icon:'assets/icons/Group (6).png'},
    {name:'Testing',description:`We ensure that no glitches come by 
    in creating the best user experience.`,icon:'assets/icons/Group 60.png'},
    {name:'Launch',description:`We help you launch the website 
    within the deadlines set by you.`,icon:'assets/icons/layer1.png'},
    {name:'Support',description:`We help you maintain your 
    e-commerce website in optimal 
    condition.`,icon:'assets/icons/g993.png'}
  ]
  slideNext(){
    this.swiper?.swiperRef.slideNext(100);
  }
  slidePrev(){
    this.swiper?.swiperRef.slidePrev(100);
  }
  onScreenResize(swiper: Swiper) {
    swiper.update()
  }
}
