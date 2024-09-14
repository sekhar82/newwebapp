import { Component } from '@angular/core';


@Component({
  selector: 'app-about-us-new',
  templateUrl: './about-us-new.component.html',
  styleUrls: ['./about-us-new.component.css']
})
export class AboutUsNewComponent {

  cards: any[] = [
    {
      title: 'Transparency', icon: 'assets/icons/Group 93.png', description: `Transparent software solutions 
      that prioritize clear communication`},
    {
      title: 'Experienced team', icon: 'assets/icons/Group 94.png', description: `Accomplished team leveraging 
        expertise for remarkable outcomes`},
    {
      title: 'Result Guarantee', icon: 'assets/icons/Group 95.png', description: `Unwavering guarantee of 
          exceptional outcomes`}
  ]

}
