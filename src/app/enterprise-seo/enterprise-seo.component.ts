import { Component } from '@angular/core';

@Component({
  selector: 'app-enterprise-seo',
  templateUrl: './enterprise-seo.component.html',
  styleUrls: ['./enterprise-seo.component.css']
})
export class EnterpriseSeoComponent {
  cards: any[] = [
    {
      name: 'SEO Audit',icon:'assets/icons/Group 75.png', description: `Enhance your website's current 
    performance in terms of content, 
    mapping, coding, and 
    keyword volume.`},
    {
      name: 'Objective and strategy',icon:'assets/icons/Vector (11).png', description: `Objectives and goals are set for 
    your SEO campaigns after 
    understanding your requirements.`},
    {
      name: 'Industry research',icon:'assets/icons/Group 81.png', description: `Comprehensive keyword and topic 
    research to project your brand as 
    an expert in your domain.`},
    {
      name: 'Optimize content and code',icon:'assets/icons/Group 82.png', description: `Code cleaning, content optimization, 
    architecture, mapping, page speed 
    optimization, navigation, URL 
    Structure, and more`},
    {
      name: 'Implementation',icon:'assets/icons/Gear-Implementation-Project-Management-Arrow.png', description: `Quality link building, link building 
    through content marketing, SMO, 
    engagement in Q&A forums, 
    and so on.`},
    {
      name: 'Report and Analysis',icon:'assets/icons/Group 83.png', description: `Assessing the campaign's results, 
    and monitor performance and 
    milestones in real-time with regular 
    updates.`}
  ]
  cards1: any[] = [
    {
      name: 'Dominate your domain',icon:'assets/icons/Group (14).png', description: `Become a trustworthy, well-known 
    resource for customers, regardless 
    of where they are in the buying 
    process.`},
    {
      name: 'Brand reputation',icon:'assets/icons/Vector (12).png', description: `Control your online narrative and 
    protect brand equity by controlling 
    your search results.`},
    {
      name: 'Scalability',icon:'assets/icons/Vector (13).png', description: `SEO strategies and executional 
    tactics that support future business
    objectives rather than targeting 
    short-term wins.`},
    {
      name: 'Market dominance',icon:'assets/svg/Market dominance.svg', description: `SEO is the most cost-effective way 
    to beat your competitors. We help 
    you stay ahead of your competitors 
    through our enterprise Search 
    Engine Optimization.`},
    {
      name: 'High-quality traffic',icon:'assets/icons/Group 86.png', description: `By identifying the right business 
    keywords and optimizing them, we 
    drive organic traffic to your website.`},
    {
      name: 'Powerful branding',icon:'assets/icons/Group 87.png', description: `Higher the ranking, the higher the 
    awareness of your brand. Top 
    ranking sets you apart from your 
    competitors & builds Brand trust.`},
    {
      name: 'Higher conversion and sales',icon:'assets/icons/Group 85.png', description: `You attract more potential buyers 
    who are searching with buying 
    intent. Hence you see the 
    sales spikes!`},
  ]
 
}
