// shared-state.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedStateService {
  private textSource = new BehaviorSubject<string>('');  // Initial value empty
  currentText = this.textSource.asObservable();

  constructor() {}

  changeText(text: string) {
    this.textSource.next(text);  // Update the text
  }
}
