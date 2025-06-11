import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { SharedStateService } from '../../services/shared-state/shared-state.service';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Skill, skillsList } from '../../models/skill.model';
import { DialogService } from '../../services/dialog/dialog.service';
import { DownloadCvService } from '../../services/download-cv/download-cv.service';

@Component({
  selector: 'app-blank',
  standalone: false,
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit {
  isScreenTooSmall: boolean = false;
  textToDisplay = '';  // The text to be displayed by the CodeCog component
  selectedSection: string = '';
  lastClickedButton: string | null = null;  // Track the last clicked button
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faDownload = faDownload;
  faEnvelope = faEnvelope;

  skills: Skill[] = skillsList;
  // skillsList = [
  //   { name: 'SQL', description: 'Relational database query language for managing and manipulating data.', showDescription: false },
  //   { name: 'Databricks', description: 'Unified analytics platform for big data analytics and machine learning.', showDescription: false },
  //   { name: 'Angular', description: 'Framework for building dynamic web applications using TypeScript.', showDescription: false },
  //   { name: 'AWS', description: 'Cloud computing platform providing a variety of services including compute power, storage, and databases.', showDescription: false },
  //   // Add other skills
  // ];
  
  @Output() buttonClicked = new EventEmitter<void>();
  dialogID: string = 'cats'

  images = [
    { src: 'Teddy.jpg', description: 'Teddy, age 15, enjoying his soft pink blanket.' },
    { src: 'BB.jpg', description: 'BB, age 5, enjoying ruining Teddy\'s photoshoot.' },
    { src: 'Marvin.jpg', description: 'Marvin, age 2, enjoying the simple things.' },

  ];

  
  @ViewChild('rightSide') rightSide!: ElementRef;
  @ViewChild('error') errorElement!: ElementRef; // Reference to error element

  constructor(
    private sharedStateService: SharedStateService,
    private dialogService: DialogService,
    private downloadCvService: DownloadCvService
  ) { 
    this.checkScreenSize(); 
  }

  ngOnInit() {
    this.checkScreenSize();
    this.onButtonClick("ABOUT ME");
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isScreenTooSmall = window.innerWidth < 220;
    this.toggleErrorVisibility(); // Update error visibility when screen size changes
  }

  toggleErrorVisibility() {
    // Show or hide the error element based on screen size
    if (this.errorElement) {
      if (this.isScreenTooSmall) {
        this.errorElement.nativeElement.style.display = 'block';
      } else {
        this.errorElement.nativeElement.style.display = 'none';
      }
    }
  }

  scrollTo(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section && this.rightSide) {
      const scrollOffset = section.offsetTop - this.rightSide.nativeElement.offsetTop;
      this.rightSide.nativeElement.scrollTo({
        top: scrollOffset,
        behavior: 'smooth'
      });
    }
  }

  onButtonClick(buttonText: string) {
    this.textToDisplay = buttonText;  // Update the text to be typed by CodeCog
    this.lastClickedButton = buttonText; // Set the last clicked button
    this.selectedSection = buttonText;  // Update the selected section based on the button clicked
  }

  isButtonActive(buttonText: string): boolean {
    return this.lastClickedButton === buttonText;
  }

  // onTabClick(tabText: string) {
  //   this.textToDisplay = tabText;
  // }

  toggleDescription(skill: any) {
    skill.showDescription = !skill.showDescription;
  }

  // onClick() {
  //   this.buttonClicked.emit();
  //   console.log("BUTTON CLICKED" + this.buttonClicked);
  // }

  openDialog(): void {
    this.dialogService.open(this.dialogID)
  }

  closeDialog(): void {
    this.dialogService.close(this.dialogID)
  }

    // wip: method to trigger the resume download
    downloadResume() {
      this.downloadCvService.getResume().subscribe(
        (response) => {
          if (response.Location) {
            this.triggerDownload(response.Location); // Use the Location field for the download URL
          } else {
            console.error('Download URL not found in the response.');
          }
        },
        (error) => {
          console.error('Error fetching the resume:', error);
        }
      );
    }
  
    downloadFile() {
      const fileUrl = 'https://drive.google.com/file/d/1QU7ZBJTfsVcSI6Lzf9gwLyZoC5N18owW/view';
      window.open(fileUrl, '_blank');
    }
    
    private triggerDownload(downloadUrl: string) {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'Resume_WTygrett_0325.11.pdf';
      link.click();
    }
}

