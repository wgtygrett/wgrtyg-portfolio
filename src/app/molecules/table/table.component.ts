import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  @Input() values: any[]
  @Input() stickyHeadings: boolean = false

  constructor() {}

  ngOnInit(): void {}
}
