import { Component } from '@angular/core';
import { DialogService } from '../../services/dialog/dialog.service'
import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  standalone: false,
  styleUrl: './template.component.css'
})
export class TemplateComponent {
  title = 'frontend-example';
  infoIcon: IconDefinition = faInfoCircle

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
  
  constructor(private dialogService: DialogService) {}
  
  openDialog(): void {
    this.dialogService.open(this.dialogID)
  }

  closeDialog(): void {
    this.dialogService.close(this.dialogID)
  }
}
