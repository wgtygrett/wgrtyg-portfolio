import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavigationService } from '../../services/navigation/navigation.service';
import { SharedStateService } from '../../services/shared-state/shared-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: false
})
export class HeaderComponent implements OnInit {
  webAppTitle = "Wendy's Frontend Template Example";
  menuIcon: IconDefinition = faBars;
  workTabs: string[] = ["Experience", "Education", "Skills", "Resume", "Contact"];
  activeTab: string = "";

  @Output() tabClicked = new EventEmitter<string>(); // Event emitter for tab click

  selectedTab: string = '';

  onTabClick(tab: string) {
    this.selectedTab = tab;
    this.tabClicked.emit(this.selectedTab); // Emit the selected tab
    console.log(this.selectedTab);
  }

  // workTabs: string[] = ["CGI 2023-2025", "CGI 2022-2023", "CGI 2019-2022"];
  otherTabs: string[] = ["Engineering Ambassador", "ACM Chapter President", "ACM Chapter Secretary", "Robotics Camp Instructor", "Android Workshop Instructor"];
  skillsTabs: string[] = ["Industry Knowledge", "Disciplines", "Tech Specs", "Other Skills"];

  activeWorkTab: string = this.workTabs[0];
  activeOtherTab: string = this.otherTabs[0];
  activeSkillsTab: string = this.skillsTabs[0];

  descriptions: { [key: string]: string } = {
    "CGI 2023-2025": "Details about your role from 2023 to 2025.",
    "CGI 2022-2023": "Details about your role from 2022 to 2023.",
    "CGI 2019-2022": "Details about your role from 2019 to 2022.",
    "Engineering Ambassador": "Your experience as an Engineering Ambassador.",
    "ACM Chapter President": "Your role as ACM Chapter President.",
    "ACM Chapter Secretary": "Your role as ACM Chapter Secretary.",
    "Robotics Camp Instructor": "Your experience teaching at the Robotics Camp.",
    "Android Workshop Instructor": "Your experience instructing an Android Workshop.",
    "Industry Knowledge": "Your industry knowledge.",
    "Disciplines": "Your disciplines and methodologies.",
    "Tech Specs": "Your technical specifications and expertise.",
    "Other Skills": "Miscellaneous skills and tools you are proficient in."
  };

  textToDisplay = '';  // The text to be displayed by the CodeCog component

  constructor(private navService: NavigationService, private sharedStateService: SharedStateService) {}

  ngOnInit(): void {}

  toggleSideNav() {
    this.navService.setShowNav(true);
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  setActiveWorkTab(tab: string) {
    this.activeWorkTab = tab;
  }

  setActiveOtherTab(tab: string) {
    this.activeOtherTab = tab;
  }

  setActiveSkillsTab(tab: string) {
    this.activeSkillsTab = tab;
  }

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

    // This method will be triggered when any button is clicked
    onButtonClick(buttonText: string) {
      this.sharedStateService.changeText(buttonText);  // Update the text in the service
      console.log("In header: " + buttonText);  // Verify in the console
    }
  

}
