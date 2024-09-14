import { Component } from '@angular/core';

@Component({
  selector: 'app-ecom-development',
  templateUrl: './ecom-development.component.html',
  styleUrls: ['./ecom-development.component.css']
})
export class EcomDevelopmentComponent {
  cards:any[] = [
    {name:'Fast loading',icon:'assets/icons/Group 57.png',description:`Fast loading applications remain speedy in serving 
    your customer’s requests. A slow-loading app 
    will make you lose customers.`},
    {name:'Registration process',icon:'assets/icons/Group 58.png',description:`Complex process make user stay away. We devise 
    efficient and easy registration process that will 
    retain your customers.`},
    {name:'Easy checkout',icon:'assets/icons/Mask group.png',description:`Easy checkout process along with multiple 
    payment options to ensure that the customer 
    doesn’t abandon the cart.`},
    {name:'CMS',icon:'assets/svg/CMS.svg',description:`CMS Give your e-commerce firm the added 
    benefit of developing a feature-rich platform with 
    elements like interactive images of products 
    and services.`},
    {name:'Custom features',icon:'assets/icons/Group (7).png',description:`Add customized features like rental, guest login, 
    enquiry buttons, in your e-commerce platform to 
    amp up user experience.`},
    {name:'Advanced features',icon:'assets/icons/Group 59.png',description:`Stay relevant and popular among your client base 
    by including all the advanced features like 
    discount coupons, offers and more in your 
    e-commerce platform.`}
  ]
  
}
