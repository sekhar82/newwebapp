import { Component } from '@angular/core';

@Component({
  selector: 'app-software-development',
  templateUrl: './software-development.component.html',
  styleUrls: ['./software-development.component.css']
})
export class SoftwareDevelopmentComponent {
  cards:any[]=[
    {title:'Requirements Gathering',icon:'assets/icons/Group 96.png',description:`Understanding user needs and 
    defining software functionalities.`},
    {title:'Design and Development',icon:'assets/icons/Group 97.png',description:` Creating software architecture 
    and coding.`},
    {title:'Testing',icon:'assets/icons/Group 98.png',description:`Ensuring software quality 
    through various tests.`},
    {title:'Deployment and Maintenance',icon:'assets/icons/Group 99.png',description:`Installing, configuring, and 
    maintaining the software.`}
  ]
  
}
