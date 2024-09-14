import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EcomDevelopmentComponent } from './ecom-development/ecom-development.component';
import { MobileAppDevelopmentComponent } from './mobile-app-development/mobile-app-development.component';
import { ServicesComponent } from './services/services.component';
import { HappycustomerComponent } from './shared/happycustomer/happycustomer.component';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';
import { CloudServicesComponent } from './cloud-services/cloud-services.component';
import { UiuxDesignComponent } from './uiux-design/uiux-design.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { EnterpriseSeoComponent } from './enterprise-seo/enterprise-seo.component';
import { SocialMediaMarketingComponent } from './social-media-marketing/social-media-marketing.component';
import { AboutUsNewComponent } from './about-us-new/about-us-new.component';
import { CarrerComponent } from './carrer/carrer.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, title: 'Home' },
  { path: 'about', component: AboutUsNewComponent, title: 'AboutUs' },
  { path: 'carrer', component: CarrerComponent, title: 'Carrer' },
  { path: 'contact', component: ContactusComponent, title: 'ContactUs' },
  {
    path: 'services', children: [
      { path: 'webdevelopment', component: ServicesComponent },
      { path: 'softwaredevelopment', component: SoftwareDevelopmentComponent },
      { path: 'mobileappdevelopment', component: MobileAppDevelopmentComponent },
      { path: 'ecomdevelopment', component: EcomDevelopmentComponent },
      { path: 'cloudesevices', component: CloudServicesComponent },
      { path: 'uiuxdesign', component: UiuxDesignComponent },
      { path: 'digitalmarketing', component: DigitalMarketingComponent },
      { path: 'enterpriseseo', component: EnterpriseSeoComponent },
      { path: 'socmediamarketing', component: SocialMediaMarketingComponent },
    ], title: 'Services'
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'services', redirectTo: '/services/webdevlopment', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
