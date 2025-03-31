import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadCvService {
  private apiUrl = 'https://ilj66wj43m.execute-api.us-east-1.amazonaws.com/prod-street-resume-update'; // Replace with your Lambda API URL

  constructor(private http: HttpClient) {}

  // Method to fetch the signed URL
  getResume(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
