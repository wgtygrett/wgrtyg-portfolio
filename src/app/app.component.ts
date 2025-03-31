import { Component } from '@angular/core';
import { DialogService } from './services/dialog/dialog.service'
import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'frontend-example';
  infoIcon: IconDefinition = faInfoCircle
  text = "Tygrett"; // Change this to your name
  displayedText = this.text; // Display the full text without typing effect
  tabs: string[] = ["About", "Projects", "Contact"];
  activeTab: string = "About";

  workTabs: string[] = ["CGI 2023-2025", "CGI 2022-2023", "CGI 2019-2022"];
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

  // descriptions: { [key: string]: string } = {
  //   About: "I am a front-end engineer passionate about UI/UX and data analytics.",
  //   Projects: "Check out my latest work in Angular, SQL, and UI/UX design.",
  //   Contact: "Feel free to reach out via LinkedIn or email!"
  // };
  
  dummyValues = [
    {
      name: 'John Lennon',
      title: 'The Walrus',
      status: 'Offline',
      role: 'Rhythm Guitar & Lead Vocals',
    },
    {
      name: 'Paul McCartney',
      title: 'Also possibly The Walrus',
      status: 'Online',
      role: 'Bass Guitar & Lead Vocals',
    },
    {
      name: 'George Harrison',
      title: 'The Quiet One',
      status: 'Offline',
      role: 'Lead Guitar & Vocals',
    },
    {
      name: 'Ringo Starr',
      title: 'The Outcast',
      status: 'Online',
      role: 'Drums & Vocals',
    },
  ]
  selectOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4']
  dialogID: string = 'test-example'

  exampleForm: FormGroup = new FormGroup({
    exampleRadioList: new FormControl('example-value-2'),
  })
  currentMonthYear: string
  
  constructor(private dialogService: DialogService) {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
    this.currentMonthYear = now.toLocaleDateString('en-US', options);
  }
  
  ngOnInit() {
    // For any animations maybe
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
  
  openDialog(): void {
    this.dialogService.open(this.dialogID)
  }

  closeDialog(): void {
    this.dialogService.close(this.dialogID)
  }
}
