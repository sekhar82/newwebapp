import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay, Pagination, Navigation, Swiper } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-empcardscroll',
  templateUrl: './empcardscroll.component.html',
  styleUrls: ['./empcardscroll.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmpcardscrollComponent implements OnInit,OnDestroy {
  perpage = Math.floor(Number(window.innerWidth) / Number(Number(window.screen.availWidth)/4))
cards:any[] = [
  { name:'Vasishta Srinidhi',degn:'CEO and Founder'},
  { name:'Vikas Santhegudda',degn:'CEO and Founder'},
  { name:'Shilpa N M',degn:'Co-Founder & Digital Marketing Head'},
  { name:'Priyanka Sekhar Mohanta',degn:'Web Development Head'},
  { name:'Soumya Vikas',degn:'Devops - Head'},
  // { name:'Suman Sampige',degn:'Digital Marketing Manager'},
  { name:'Kiran Kumar Nayak',degn:'Fullstack Developer'},
  { name:'Aishwarya',degn:'Content Writer'},
  // { name:'Gnyanesh',degn:'SEO Specialist & Wordpress Developer'},
  // { name:'Kiran B',degn:'SEO Specialist & Wordpress Developer'},
  { name:'Krithi Shukla',degn:'Content Writer Head'},
  { name:'Sreelal',degn:'Graphics Designer & UI/UX Designer'}
]
isCompleted:boolean =false
  intval: NodeJS.Timer | undefined;
  isChanged: boolean = true;
constructor(){}
  ngOnInit(): void {

  }
  ngOnDestroy(): void {
  }
  onScreenResize(swiper:Swiper){
swiper.update()
  }
}
