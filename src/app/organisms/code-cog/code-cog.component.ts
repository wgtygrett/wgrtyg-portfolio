import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SharedStateService } from '../../services/shared-state/shared-state.service';

@Component({
  selector: 'app-code-cog',
  templateUrl: './code-cog.component.html',
  styleUrls: ['./code-cog.component.css']
})
export class CodeCogComponent implements OnChanges, OnInit {
  @Input() textToType: string = '';  // Text passed from parent
  typedText = '';  // The text that will be typed out
  typingSpeed = 100;  // Speed of typing
  private typingInterval: any = null;  // Store the interval reference

  textToDisplay: string = '';  // Initialize the text that will be displayed

  constructor(private sharedStateService: SharedStateService) {}

  ngOnInit(): void {
    // Subscribe to the text updates from the service
    this.sharedStateService.currentText.subscribe(text => {
      this.textToDisplay = text;  // Update the displayed text when it changes
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['textToType'] && this.textToType) {
      this.resetTyping();
      this.typeText(this.textToType);  // Pass the Input textToType to the method
    }
  }

  resetTyping(): void {
    clearInterval(this.typingInterval);  // Stop any ongoing typing effect
    this.typedText = '';  // Reset the displayed text
  }

  typeText(text: string): void {
    let index = 0;
    this.typingInterval = setInterval(() => {
      if (index < text.length) {  // Use the passed text parameter
        this.typedText += text[index];
        index++;
      } else {
        clearInterval(this.typingInterval);  // Stop typing when done
      }
    }, this.typingSpeed);
  }
}
