// about-me.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  standalone: false
})
export class AboutMeComponent implements OnInit {
  currentMonthYear: string;
  textToDisplay: string = ''; // Initialize the text to be displayed in CodeCog

  workTabs: string[] = ["CGI 2023-2025", "CGI 2022-2023", "CGI 2019-2022"];
  activeWorkTab: string = this.workTabs[0];

  constructor() {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
    this.currentMonthYear = now.toLocaleDateString('en-US', options);
  }

  ngOnInit(): void {
    // Initialize with the default tab text
    this.textToDisplay = this.activeWorkTab;
  }

  setActiveWorkTab(tab: string): void {
    this.activeWorkTab = tab;
    console.log("SET ACTIVE " + this.activeWorkTab)
    this.textToDisplay = tab; // Update text to be displayed in CodeCog
    console.log("SET ACTIVE " + this.textToDisplay)
  }

  updateTextToDisplay(text: string): void {
    this.textToDisplay = text;
  }
}
