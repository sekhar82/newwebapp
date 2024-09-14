import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay, Pagination, Navigation, Swiper } from "swiper";
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-app-type',
  templateUrl: './app-type.component.html',
  styleUrls: ['./app-type.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppTypeComponent {
  perpage = Math.floor(Number(window.innerWidth) / Number(Number(window.screen.availWidth) / 4))
  cards: any[] = [
    {
      title: 'iPhone App Development', description: `Get best in class iPhone app 
  development services to gather 
  more customers and boost the 
  global reach of your business!`, image: 'assets/Vector (3).png'
    },
    {
      title: 'Android App Development', description: `We create easy-to-use and 
  customized android apps 
  powered by user intuitive 
  technology that will propel your 
  business to success!`, image: 'assets/Group 44.png'
    },
    {
      title: 'E-commerce App', description: `Add power and functionality to 
  your business through our 
  cutting-edge e-commerce 
  mobile app development 
  solutions.`, image: 'assets/Group (2).png'
    },
    {
      title: 'Bots App', description: `Our well-crafted Bots apps 
  helps you upgrade the quality of 
  real-time, automated interactions
  with your customers.`, image: 'assets/Vector (2).png'
    },
    {
      title: 'iPad App', description: `Maximize your iPad’s functionality
  and speed through our best-in-
  class iPad App building solutions
   that are aligned with the 
  latest features.`, image: 'assets/Group (1).png'
    },
    {
      title: 'iBeacon App', description: `We create iBeacon technology 
  powered apps that offers hassle
  -free functioning and amazing 
  connectivity.`, image: 'assets/Vector (1).png'
    },
    {
      title: 'Hybrid App', description: `We develop top-notch hybrid 
  apps using our expertise in 
  various hybrid application 
  frameworks.`, image: 'assets/Group.png'
    },
    {
      title: 'IoT App', description: `Provide your customers with a 
  better user experience, by 
  seamlessly integrating devices 
  with the existing infrastructure.`, image: 'assets/Group 48.png'
    },
    {
      title: 'React Native Apps', description: `Build mobile iOS and Android 
  applications using React, a top-
  of-the-range JavaScript library 
  for user interfaces.`, image: 'assets/Vector.png'
    }
  ]
  isCompleted: boolean = false
  intval: NodeJS.Timer | undefined;
  isChanged: boolean = true;
  constructor() { }
  ngOnInit(): void {

  }
  ngOnDestroy(): void {
  }
  onScreenResize(swiper: Swiper) {
    swiper.update()
  }
}
