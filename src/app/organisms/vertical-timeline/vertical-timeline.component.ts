import { Component, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-vertical-timeline',
  standalone: false,
  templateUrl: './vertical-timeline.component.html',
  styleUrl: './vertical-timeline.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('fadeInUp', [
      state('in', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('out', style({
        opacity: 0,
        transform: 'translateY(50px)'
      })),
      transition('out => in', [
        animate('0.5s ease-out')
      ])
    ])
  ],
})
export class VerticalTimelineComponent {

  educationTimeline = [
    { school: "McNeese State University", date: "2015 - 2019", degree: "Bachelor of Science in Computer Science" },
    { school: "Academy of Acadiana", date: "2013", degree: "Certification, EKG Technician" },
    { school: "Delta School of Arts and Technology", date: "2013", degree: "Certification, Phlebotomy Technician" },
  ];

  // Detecting when an element comes into view
  elementsInView: boolean[] = [];
  currentStage=1;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    this.checkScrollPosition();
  }

  ngOnInit() {
    this.checkScrollPosition(); // Check initially
  }

  checkScrollPosition() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
      const position = item.getBoundingClientRect();
      if (position.top < window.innerHeight && position.bottom >= 0) {
        if (!this.elementsInView[index]) {
          this.elementsInView[index] = true;
        }
      } else {
        if (this.elementsInView[index]) {
          this.elementsInView[index] = false;
        }
      }
    });
  }
}
