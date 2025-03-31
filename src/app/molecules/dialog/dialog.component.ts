import { Component, ElementRef, Input, OnDestroy, OnInit, ViewEncapsulation, Inject, PLATFORM_ID } from '@angular/core'
import { DialogService } from '../../services/dialog/dialog.service'
import { isPlatformBrowser } from '@angular/common'
import dialogOpenClose from '../../animations/dialog-open-close/dialog-open-close'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.css'],
  // standalone: false,
  encapsulation: ViewEncapsulation.None,
  animations: [dialogOpenClose],
  imports: [CommonModule],
})
export class DialogComponent implements 
OnInit
, OnDestroy 
{
  @Input() id: string
  @Input() title: string
  isOpen: 'open' | 'closed' = 'closed'
  private element: any

  constructor(
    private dialogService: DialogService, 
    private el: ElementRef, 
    @Inject(PLATFORM_ID) private platformId: Object
  ) 
  {
    this.element = this.el.nativeElement
  }

  ngOnInit(): void {
    if (!this.id) {
      console.error('dialog must have an id')
      return
    }

    // Only access the DOM if we are in the browser
    if (isPlatformBrowser(this.platformId)) {
      document.body.appendChild(this.element)

      this.element.addEventListener('click', (el: { target: { id: string } }) => {
        if (el.target.id === 'dialog-container') {
          this.close()
        }
      })
    }

    this.dialogService.add(this)
  }

  ngOnDestroy(): void {
    this.dialogService.remove(this.id)

    // Only remove the element if we are in the browser
    if (isPlatformBrowser(this.platformId)) {
      this.element.remove()
    }
  }

  open(): void {
    // Only manipulate the DOM if we are in the browser
    if (isPlatformBrowser(this.platformId)) {
      this.element.style.display = 'block'
      document.body.classList.add('dialog-open')
    }
    this.isOpen = 'open'
  }

  close(): void {
    // Only manipulate the DOM if we are in the browser
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('dialog-open')
      setTimeout(() => {
        this.element.style.display = 'none'
      }, 300)
    }
    this.isOpen = 'closed'
  }
}
