import { Component, Input } from '@angular/core'
import { ControlValueAccessor } from '@angular/forms'

@Component({
  selector: 'app-select',
  standalone: false,
  templateUrl: './select.component.html'
})
export class SelectComponent implements ControlValueAccessor {
  @Input() inputId: string
  @Input() options: string[]
  @Input() selected: string
  @Input() label: string

  onChange: any = () => {}
  onTouch: any = () => {}

  constructor() {}

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

  writeValue(value: string) {
    this.selected = value
  }
}
