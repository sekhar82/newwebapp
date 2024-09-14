import { Component } from '@angular/core';

@Component({
  selector: 'app-cloud-services',
  templateUrl: './cloud-services.component.html',
  styleUrls: ['./cloud-services.component.css']
})
export class CloudServicesComponent {
  cards:any[] = [
    {name:'Security',description:`Harness your infrastructure's full potential across 
    diverse apps, clouds, and devices, fortified by 
    intrinsic security at every layer.`,icon:'assets/icons/Vector (4).png'},
    {name:'Networking',description:`Supercharge modern app operations with 
    virtualized network and security, spanning WAN, 
    data center, and cloud environments.`,icon:'assets/icons/g15.png'},
    {name:'Telco Cloud',description:`Deliver applications effortlessly across any cloud, 
    anywhere from the core, RAN, and edge to the 
    expansive cloud ecosystem.`,icon:'assets/icons/Vector (5).png'},
    {name:'App Platform',description:`Innovate, modernize, and unify with cloud-native 
    apps, transforming infrastructure across any cloud 
    environment.`,icon:'assets/icons/Group 61.png'},
    {name:'Anywhere workplace',description:`Empower employees with seamless anytime, 
    anywhere work experiences, enabling 
    productivity beyond boundaries.`,icon:'assets/icons/Group 62.png'},
    {name:'Cloud Infrastructure',description:`Unify app modernization and multi-cloud 
    operations with a simplified, consistent 
    environment.`,icon:'assets/icons/Group 63.png'},
  ]
  cards1:any[] = [
    {name:'Maximize resource efficiency',description:`Minimize AWS bills. Optimize 
    resources. Empower your business.`,icon:'assets/svg/Maximize resource efficiency.svg'},
    {name:'Terraform integration',description:`Effortlessly build and manage data 
    infrastructure with secure and 
    efficient Terraform integration..`,icon:'assets/icons/Group 64.png'},
    {name:'AWS cloud service expertise',description:`Masters of Amazon CloudFront, 
    Redshift, and SMS. Streamline your 
    content delivery, data warehousing, 
    and server migration with our 
    expertise.`,icon:'assets/icons/Vector (6).png'},
    {name:'Security and Compliance',description:`Elevate your security. Comprehensive 
    protection for your valuable assets.`,icon:'assets/icons/Group 65.png'},
  ]
  
}
