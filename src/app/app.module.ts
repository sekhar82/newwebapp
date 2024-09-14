import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { EmpcardscrollComponent } from './shared/empcardscroll/empcardscroll.component';
import { HappycustomerComponent } from './shared/happycustomer/happycustomer.component';
import { SwiperModule } from 'swiper/angular';
import { ContactusComponent } from './contactus/contactus.component'
import { GoogleMapsModule } from '@angular/google-maps';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';
import { MobileAppDevelopmentComponent } from './mobile-app-development/mobile-app-development.component';
import { EcomDevelopmentComponent } from './ecom-development/ecom-development.component';
import { AppTypeComponent } from './shared/app-type/app-type.component';
import { AppProcessComponent } from './shared/app-process/app-process.component';
import { CloudServicesComponent } from './cloud-services/cloud-services.component';
import { UiuxDesignComponent } from './uiux-design/uiux-design.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { SocialMediaMarketingComponent } from './social-media-marketing/social-media-marketing.component';
import { EnterpriseSeoComponent } from './enterprise-seo/enterprise-seo.component';
import { AboutUsNewComponent } from './about-us-new/about-us-new.component';
import { CarrerComponent } from './carrer/carrer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LetsTalkFormComponent } from './shared/lets-talk-form/lets-talk-form.component';
import { BookCallComponent } from './shared/book-call/book-call.component';
import { CommonModalComponent } from './shared/common-modal/common-modal.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    AboutusComponent,
    ServicesComponent,
    EmpcardscrollComponent,
    HappycustomerComponent,
    ContactusComponent,
    SoftwareDevelopmentComponent,
    MobileAppDevelopmentComponent,
    EcomDevelopmentComponent,
    AppTypeComponent,
    AppProcessComponent,
    CloudServicesComponent,
    UiuxDesignComponent,
    DigitalMarketingComponent,
    SocialMediaMarketingComponent,
    EnterpriseSeoComponent,
    AboutUsNewComponent,
    CarrerComponent,
    LetsTalkFormComponent,
    BookCallComponent,
    CommonModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LottieModule.forRoot({ player: playerFactory }),
    SwiperModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  // providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {
  // location: Location;
  // constructor(location: Location) {
  //   this.location = location;
  // }
}
