import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() variant: string;
  @Input() disabled: boolean = false;
  @Input() borderRadius: string = '0.5rem'; // Default border-radius
  @Output() buttonClicked = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.buttonClicked.emit();
    console.log("BUTTON CLICKED" + this.buttonClicked);
  }

  getVariant(): string {
    switch (this.variant) {
      case 'primary':
        return 'btn-primary';
      case 'primary-transparent':
        return 'btn-primary-transparent';
      case 'secondary':
        return 'btn-secondary';
      case 'secondary-transparent':
        return 'btn-secondary-transparent';
      case 'warning':
        return 'btn-warning';
      case 'warning-transparent':
        return 'btn-warning-transparent';
      case 'open':
        return 'btn-open';
      case 'open-transparent':
        return 'btn-open-transparent';
      case 'navy':
        return 'btn-navy';
      case 'navy-transparent':
        return 'btn-navy-transparent';
      case 'eggplant':
        return 'btn-eggplant';
      case 'eggplant-transparent':
        return 'btn-eggplant-transparent';
      case 'blue-violet':
        return 'btn-blue-violet';
      case 'blue-violet-transparent':
        return 'btn-blue-violet-transparent';
      case 'wine':
        return 'btn-wine';
      case 'wine-transparent':
        return 'btn-wine-transparent';
      case 'emerald':
        return 'btn-emerald';
      case 'emerald-transparent':
        return 'btn-emerald-transparent';
      case 'tech-blue-dark':
        return 'btn-tech-blue-dark';
      case 'tech-blue-dark-transparent':
        return 'btn-tech-blue-dark-transparent';
      case 'tech-blue-light':
        return 'btn-tech-blue-light';
      case 'tech-blue-light-transparent':
        return 'btn-tech-blue-light-transparent';
      case 'tech-blue-gray':
        return 'btn-tech-blue-gray';
      case 'tech-blue-gray-transparent':
        return 'btn-tech-blue-gray-transparent';
      case 'tech-blue-mid':
        return 'btn-tech-blue-mid';
      case 'tech-blue-mid-transparent':
        return 'btn-tech-blue-mid-transparent';
      case 'tech-blue-bright':
        return 'btn-tech-blue-bright';
      case 'tech-blue-bright-transparent':
        return 'btn-tech-blue-bright-transparent';
      case 'tech-blue':
        return 'btn-tech-blue';
      case 'tech-blue-transparent':
        return 'btn-tech-blue-transparent';
      
      // Add line variants for each color
      case 'primary-line':
        return 'btn-primary-line';
      case 'primary-transparent-line':
        return 'btn-primary-transparent-line';
      case 'secondary-line':
        return 'btn-secondary-line';
      case 'secondary-transparent-line':
        return 'btn-secondary-transparent-line';
      case 'warning-line':
        return 'btn-warning-line';
      case 'warning-transparent-line':
        return 'btn-warning-transparent-line';
      case 'open-line':
        return 'btn-open-line';
      case 'open-transparent-line':
        return 'btn-open-transparent-line';
      case 'navy-line':
        return 'btn-navy-line';
      case 'navy-transparent-line':
        return 'btn-navy-transparent-line';
      case 'eggplant-line':
        return 'btn-eggplant-line';
      case 'eggplant-transparent-line':
        return 'btn-eggplant-transparent-line';
      case 'blue-violet-line':
        return 'btn-blue-violet-line';
      case 'blue-violet-transparent-line':
        return 'btn-blue-violet-transparent-line';
      case 'wine-line':
        return 'btn-wine-line';
      case 'wine-transparent-line':
        return 'btn-wine-transparent-line';
      case 'emerald-line':
        return 'btn-emerald-line';
      case 'emerald-transparent-line':
        return 'btn-emerald-transparent-line';
      case 'tech-blue-dark-line':
        return 'btn-tech-blue-dark-line';
      case 'tech-blue-dark-transparent-line':
        return 'btn-tech-blue-dark-transparent-line';
      case 'tech-blue-light-line':
        return 'btn-tech-blue-light-line';
      case 'tech-blue-light-transparent-line':
        return 'btn-tech-blue-light-transparent-line';
      case 'tech-blue-gray-line':
        return 'btn-tech-blue-gray-line';
      case 'tech-blue-gray-transparent-line':
        return 'btn-tech-blue-gray-transparent-line';
      case 'tech-blue-mid-line':
        return 'btn-tech-blue-mid-line';
      case 'tech-blue-mid-transparent-line':
        return 'btn-tech-blue-mid-transparent-line';
      case 'tech-blue-bright-line':
        return 'btn-tech-blue-bright-line';
      case 'tech-blue-bright-transparent-line':
        return 'btn-tech-blue-bright-transparent-line';
      case 'tech-blue-line':
        return 'btn-tech-blue-line';
      case 'tech-blue-transparent-line':
        return 'btn-tech-blue-transparent-line';
      default:
        return 'btn-primary'; // Default to primary if variant isn't recognized
    }
  }
  
}
