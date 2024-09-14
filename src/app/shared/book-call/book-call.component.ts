import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-call',
  templateUrl: './book-call.component.html',
  styleUrls: ['./book-call.component.css']
})
export class BookCallComponent {
  @Input() title: string = 'Ready to Get Started?'
}
