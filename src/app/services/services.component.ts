import { Component } from '@angular/core';
import { ShareService } from '../shared/http-services/share.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  cards: any[] = [
    {
      name: 'Graphic Interface ', description: `A graphic interface, or GUI, is a visual way to 
    interact with a computer system using icons, 
    menus, and buttons.`, icon: 'assets/icons/Group 55.png'
    },
    {
      name: 'Bootstrapping', description: `Starting and growing a business with minimal 
    external resources or funding.`, icon: 'assets/icons/Group (3).png'
    },
    {
      name: 'Screen Optimized', description: `Enhancing visuals and user-friendliness on digital 
    screens through font sizes, color schemes, and 
    responsive layout. Boosts engagement and 
    effective communication for businesses.`, icon: 'assets/icons/g2673.png'
    },
    {
      name: 'Content Update', description: `A detailed and clear description that breaks 
    down a topic, providing relevant information or 
    examples to ensure a thorough understanding.`, icon: 'assets/icons/Group 56.png'
    },
    {
      name: 'Application Security', description: `Protecting software applications from threats by 
    implementing measures such as authentication, 
    input validation, secure coding, encryption, 
    and regular testing.`, icon: 'assets/svg/Application Security.svg'
    },
    {
      name: 'Error / Bug Fixing', description: ` Identifying and resolving issues in software by 
    debugging, fixing the code, testing the solution, 
    and deploying the updated version.`, icon: 'assets/icons/Group (4).png'
    }
  ]
  cards2: any[] = [
    {
      name: 'UX Process', description: `Well-developed UX experience to 
    significantly improve customer 
    satisfaction.`, icon: 'assets/icons/Layer_1.png'
    },
    {
      name: 'Design', description: `Interactive design that keeps your 
    customers engaged.`, icon: 'assets/icons/Group (5).png'
    },
    {
      name: 'Development', description: `User-friendly design interface with 
    enhanced performance.`, icon: 'assets/icons/Group (6).png'
    },
    {
      name: 'Testing', description: `Test accessibility, functionality and 
    adaptability to ensure seamless 
    performance.`, icon: 'assets/icons/Group 60.png'
    },
    {
      name: 'Launch', description: `Brand strengthening and customer 
    confidence building through 
    flawless launch.`, icon: 'assets/icons/layer1.png'
    },
    {
      name: 'Support', description: `Ongoing maintenance and support 
    to handle unforeseen events as 
    your business evolves.`, icon: 'assets/icons/g993.png'
    },
  ]
  companyName: any = '';

  constructor(private _s: ShareService) { }
  sendEmail() {
    let template = `
    <p>Dear Valiant Edge</p>
    <p>A Quotation requesting from company: ${this.companyName}, Please Verify</p>
    <br/>
    <p> Thank You </p>
    <p>Mail Service Valiant Edge</p>
    `
    this._s.sendSESMail("Need a Quote", template)
    this.companyName = ''
  }

}
