import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-uiux-design',
  templateUrl: './uiux-design.component.html',
  styleUrls: ['./uiux-design.component.css']
})
export class UiuxDesignComponent {
  cards:any[] = [
    {name:'Exquisite Design',icon:'assets/icons/Group 87.png',description:`Boundless Innovation, Captivating Audiences Our Portfolio Redefines 
    the Frontiers of Design.`},
    {name:'Tailored Processes',icon:'assets/icons/Group 87.png',description:`Agile Adaptation, Crafted Excellence Our UI/UX Designers Tailor 
    Processes for Optimal Outcomes.`},
    {name:'Integrity and Values',icon:'assets/icons/Group 67.png',description:`Inclusive Empowerment Ethical Design Solutions for Equal Access 
    and Opportunities.`},
    {name:'Insightful Mastery',icon:'assets/icons/Group 68.png',description:`Proven Excellence, Industry's Design Destination Our Time-Tested 
    Approach Sets the Standard..`}
  ]
  cards1:any[] = [
    {name:'Cognitive Evaluation',icon:'assets/icons/g1725.png',description:`Expert Reviews Unleash Usability Insights, Evaluating Products against 
    Pristine Design Principles`},
    {name:'Design Evaluation',icon:'assets/icons/Group (5).png',description:`Uncovering Quality Dimensions through Comprehensive Product 
    Evaluation.`},
    {name:'User-Focused Testing',icon:'assets/icons/Vector (7).png',description:`Real-Time User Testing for Unparalleled Product Evaluation and 
    Data-driven Decision Making.`},
    {name:'Cultural Observation',icon:'assets/icons/Group (8).png',description:`Ethnographic Research Illuminates Users within their Authentic 
    Technical and Social Ecosystems.`}
  ]
  cards2:any[] = [
    {name:'Digital Identity',icon:'assets/svg/Digital Identity.svg',description:`Strategic Digital Branding for Establishing an Enduring Identity and 
    Omni-Presence`},
    {name:'User Experience Design',icon:'assets/icons/Vector (9).png',description:`Crafting Holistic, Intuitive, and Structured Digital Journeys with Design 
    Excellence and Best-in-Class Standards.`},
    {name:'User Interface Design',icon:'assets/icons/Group (10).png',description:`Designing Aesthetic, Delightful, and Visually Captivating Products for 
    Unparalleled User Enjoyment`},
    {name:'Interaction Design',icon:'assets/svg/Interaction Design.svg',description:`Streamlining Interactions for Intuitive, Seamless, and Task-
    Oriented Outcomes`},
    {name:'Motion Graphics',icon:'assets/icons/Group (11).png',description:`Real-Time Input Movement for Enhanced Interactions and Elevated 
    Product Quality`},
    {name:'Digital Illustrations',icon:'assets/icons/Group (9).png',description:`Crafting Striking and Cohesive Sets of Illustrations and Icon Styles 
    Aligned with Brand Guidelines.`}
  ]
  cards3:any[] = [
    {name:'Front-End Development',icon:'assets/icons/Group (12).png',description:`Implementing Optimal Tech Stacks (Full-Stack, MEAN Stack, Flutter, 
      Native-OS) for Your Project's Success.`},
    {name:'Web Applications',icon:'assets/icons/Group 71.png',description:`Crafting Dynamic and Responsive Web Applications through the 
    Perfect Blend of Agile Development.`},
    {name:'Mobile Applications',icon:'assets/icons/Group 72.png',description:`Harnessing Cutting-edge Technologies for the Development of Robust, 
    Scalable Hybrid, and Native Applications.`},
    {name:'Custom Applications',icon:'assets/icons/Group (7).png',description:`Implementing Optimal Technology Stacks for Wearables, Dashboards, 
    and IoT Interfaces.`},
    {name:'SAAS Implementation',icon:'assets/icons/g2583.png',description:`Enabling Scalable SaaS Applications with a Cloud-First Approach for 
    Seamless Anytime-Anywhere Access.`},
    {name:'CMS Integration',icon:'assets/icons/Group 74.png',description:`Building an Accessible Customer-Managed Platform for Effortless 
    Creation, Management, and Modification of Digital Content.`}
  ]
  
}
