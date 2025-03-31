import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private showNav$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(private router: Router) {
    router.events.subscribe(() => {
      this.setShowNav(false)
    })
  }

  ngOnInit() {}

  getShowNav() {
    return this.showNav$.asObservable()
  }

  setShowNav(showHide: boolean) {
    this.showNav$.next(showHide)
    // console.log("Nav clicked")
  }

  toggleNavState() {
    // const newValue = !this.showNav$.value;
    // console.log('Toggling nav state:', newValue);
    // this.showNav$.next(newValue);
    this.showNav$.next(!this.showNav$.value)
  }

  isNavOpen() {
    return this.showNav$.value
  }
}
