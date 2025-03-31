import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide-right',
  templateUrl: './slide-right.component.html',
  styleUrls: ['./slide-right.component.css'],
  animations: [
    trigger('slideInRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }), // Start off-screen
        animate('900ms ease-out', style({ transform: 'translateX(0)' })) // Slide to full width
      ])
    ])
  ],
  standalone: false,
})
export class SlideRightComponent {
  @Input() text: string = 'This is a div with animation'; // Default text

  divVisible = true;

  // Set a delay of 500ms before triggering the animation
  ngOnInit() {
    setTimeout(() => {
      this.divVisible = true;
    }, 500);
  }
}