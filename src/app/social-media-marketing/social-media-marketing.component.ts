import { Component } from '@angular/core';

@Component({
  selector: 'app-social-media-marketing',
  templateUrl: './social-media-marketing.component.html',
  styleUrls: ['./social-media-marketing.component.css']
})
export class SocialMediaMarketingComponent {
  cards:any[] = [
    {name:'Brand Positioning',icon:'assets/icons/u.png',description:`Our consistent approach enhances key messaging via a unique style 
    that portrays your brand. This helps to position your brand as 
    trustworthy`},
    {name:'Leads Generation',icon:'assets/icons/Group 78.png',description:`We qualify leads with the right social media marketing services by 
    encouraging them to buy your products or services on a regular basis.`},
    {name:'Increased Engagement',icon:'assets/icons/Group 88.png',description:`We believe in actionable social media management services to drive 
    your engagement strategy.`},
    {name:'Social Proof for Growth',icon:'assets/icons/Group 89.png',description:`We help in building trust and a powerful brand association for your 
    customers by finding the best way to build strong social proof.`}
  ]
  cards1:any[] = [
    {name:'Finding the Right Platform',icon:'assets/icons/Group 90.png',description:`Not every social media platform is the right one 
    to connect with your ideal customers. The easiest 
    method to build engaged audiences, as well as 
    potential buyers, is to reach out to them where 
    they spend the most time. We optimize your 
    profiles on the appropriate channel based on 
    your audience`},
    {name:'Targeting Perfection',icon:'assets/icons/Group 91.png',description:`Also, not everyone is your target audience. We 
    design successful outcomes and deliver them 
    intelligently. Through a campaign that resonates 
    with your audience and motivates them to take 
    action, we generate beneficial outcomes, that 
    address their pain and points.`},
    {name:'Performance Tracking',icon:'assets/icons/Group 92.png',description:`Measuring performance and tracking results aid in 
    the implementation of a results-based approach. 
    We audit the campaigns regularly to guarantee 
    that they are producing the required results. 
    Detailed reporting gives insights on your position 
    and methodologies to improve the same.`}
  ]
  
}
