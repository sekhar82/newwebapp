import { Component } from '@angular/core';

@Component({
  selector: 'app-digital-marketing',
  templateUrl: './digital-marketing.component.html',
  styleUrls: ['./digital-marketing.component.css']
})
export class DigitalMarketingComponent {
  cards:any[] = [
    {name:'Search Engine Optimization',icon:'assets/icons/Group 75.png',description:`Soar to a high rank in the top search engines & 
    get noticed before all others in the queue`},
    {name:'Pay-Per Click',icon:'assets/icons/Group 76.png',description:`Unleash the power of PPC Ads to get multiple 
    clicks to your website & generate 
    big sales figures`},
    {name:'Social Media Marketing',icon:'assets/icons/Group 77.png',description:`Be a known figure on social media & get more 
    traffic for your business through social media 
    marketing`},
    {name:'Lead Generation Services',icon:'assets/icons/Group 78.png',description:`Generate valuable, targeted & qualified leads and 
    convert your leads into sure-shot buyers in 
    just no time!`},
    {name:'Branding Services',icon:'assets/icons/u.png',description:`Position your brand in the right way, garner all 
    attention and build an impressive brand 
    identity online`},
    {name:'Content Marketing Services',icon:'assets/icons/Blogger-Writer-Pencil-Browser-Blogging.png',description:`Industry-best content marketing support to help 
    you create optimized content aimed at fueling 
    conversions and boosting sales`}
  ]
  cards1:any[] = [
    {name:'Strategic thinking',icon:'assets/icons/Vector (11).png',description:`Identify risks that can nullify your 
    business strategies & 
    deter progress`},
    {name:'Target acquisition',icon:'assets/icons/Group 79.png',description:`Draw the attention of your target 
    audience towards your brand & 
    hold their interest`},
    {name:'Multiple linking',icon:'assets/icons/Group 80.png',description:`Consider multiple facets of your 
    business plan before taking that 
    one big leap of faith`},
    {name:'Customer support',icon:'assets/icons/Group (13).png',description:`Sort out the issues faced by your 
    customers & win their trust`}
  ]
 
}
