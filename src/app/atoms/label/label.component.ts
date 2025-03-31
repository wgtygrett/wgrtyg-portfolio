import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  standalone: false,
  templateUrl: './label.component.html',
  styleUrl: './label.component.css'
})
export class LabelComponent implements OnInit {
  @Input() for: string

  constructor() {}

  ngOnInit(): void {}
}
