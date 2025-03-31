import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  standalone: false,
})
export class ContactFormComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  private scriptUrl = 'https://script.google.com/macros/s/AKfycbylezFzwReqnNvMTxxX6LeBawmttDJqaVy6wV9FnzfHSJNnN8U10IfD2k-ZZQKYZXGW/exec';

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post(this.scriptUrl, this.formData)
      .subscribe(response => {
        console.log('Email sent successfully:', response);
      }, error => {
        console.error('Error sending email:', error);
      });
  }
}
