import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var bootstrap: any

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  url: string = 'dashboard'
  service: any[] = [
    { name: 'Website Development', url: '/services/webdevelopment', img: 'assets/iconimage/Frame 2 (1).png' },
    { name: 'Software Development', url: '/services/softwaredevelopment', img: 'assets/iconimage/young-programmers 1.png' },
    { name: 'Mobile App Development', url: '/services/mobileappdevelopment', img: 'assets/iconimage/young-programmers 2.png' },
    { name: 'E-Commerce Website', url: '/services/ecomdevelopment', img: 'assets/iconimage/young-programmers 3.png' },
    { name: 'Cloude Services', url: '/services/cloudesevices', img: 'assets/cloud-services-difference_network-coverage.jpg' },
    { name: 'UI & UX Design', url: '/services/uiuxdesign', img: 'assets/ui-ux-1140x900.jpg.webp' }
  ]
  marketing: any[] = [
    { name: 'Digital Marketing', url: '/services/digitalmarketing', img: 'assets/iconimage/young-programmers 4.png' },
    { name: 'Enterprise SEO', url: '/services/enterpriseseo', img: 'assets/iconimage/young-programmers 5.png' },
    { name: 'Social Media Marketing', url: '/services/socmediamarketing', img: 'assets/iconimage/young-programmers 6.png' },
    { name: 'Pay-Per- Click', url: '', img: 'assets/iconimage/young-programmers 7.png' },
    { name: 'Lead Generation', url: '', img: 'assets/iconimage/young-programmers 8.png' },
    { name: 'Digital Branding', url: '', img: 'assets/iconimage/young-programmers 9.png' }
  ]
  cloude: any[] = [
    { name: 'Near Cloud', url: '', img: 'assets/iconimage/young-programmers 10.png' },
    { name: 'Backup Systems', url: '', img: 'assets/iconimage/young-programmers 11.png' },
    { name: 'API Cloud', url: '', img: 'assets/iconimage/young-programmers 14.png' },
    { name: 'Web Services', url: '', img: 'assets/iconimage/young-programmers 15.png' },
    { name: 'Office Cloud', url: '', img: 'assets/iconimage/young-programmers 12.png' },
    { name: 'Hybrid Cloud', url: '', img: 'assets/iconimage/young-programmers 13.png' },
    { name: 'SDK Cloud', url: '', img: 'assets/iconimage/young-programmers 16.png' },
    { name: 'Cloud Hosting', url: '', img: 'assets/iconimage/young-programmers 17.png' }
  ]
  technology: any[] = [
    { name: 'React JS', url: '', img: 'assets/iconimage/young-programmers 18.png' },
    { name: 'Angular JS', url: '', img: 'assets/iconimage/young-programmers 19.png' },
    { name: 'VUE JS', url: '', img: 'assets/iconimage/young-programmers 24.png' },
    { name: 'Node JS', url: '', img: 'assets/iconimage/young-programmers 25.png' },
    { name: 'React Native', url: '', img: 'assets/iconimage/young-programmers 20.png' },
    { name: 'Flutter', url: '', img: 'assets/iconimage/young-programmers 22.png' },
    { name: 'PHP', url: '', img: 'assets/iconimage/58481791cef1014c0b5e4994 1.png' },
    { name: 'Laravel', url: '', img: 'assets/iconimage/2560px-Logo.min 1.png' },
    { name: 'Cake PHP', url: '', img: 'assets/iconimage/logo-1 1.png' },
    { name: 'Wordpress', url: '', img: 'assets/iconimage/wordpress-logo-png-transparent-wordpress-logo-images-pluspng-6 1.png' },
    { name: 'Codigniter', url: '', img: 'assets/iconimage/62a372286209494ec2b1706f 1.png' }
  ]
  dropdown: any;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        val.url == '/' ? this.url = 'dashboard' : this.url = val.url.split('/')[1]
        // console.log(this.url,val)
      }
    });
    this.dropdown = new bootstrap.Dropdown('#main-dd')
  }
  navigateTo(url: string) {
    document.getElementById('ddMenu')?.classList?.remove('show')
    this.router.navigateByUrl(url)
  }
  closedd() {
    // const myDropdown:any = document.getElementById('main-dd')
    this.dropdown.hide()
    // myDropdown.addEventListener('hide.bs.dropdown', (res:any) => {
    //   // do something...
    // })
  }
}
