import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Observable } from 'rxjs'
import { NavigationService } from '../../services/navigation/navigation.service'
import { SideNavDirection } from './side-nav-direction'

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class SideNavComponent 
// implements OnInit 
{
  // showSideNav: Observable<boolean>

  // closeIcon: IconDefinition = faTimes

  // @Input() sidenavTemplateRef: any
  // @Input() duration: number = 1
  // @Input() navWidth: number = window.innerWidth
  // @Input() direction: SideNavDirection = SideNavDirection.Right

  // constructor(private navService: NavigationService) {}

  ngOnInit(): void {
    // this.showSideNav = this.navService.getShowNav()
  }

  // onSidebarClose() {
  //   this.navService.setShowNav(false)
  // }

//   getSideNavBarStyle(showNav: boolean) {
//     let navBarStyle: any = {}

//     navBarStyle.transition = this.direction + ' ' + this.duration + 's, visibility ' + this.duration + 's'
//     navBarStyle.width = this.navWidth + 'px'
//     navBarStyle[this.direction] = (showNav ? 0 : this.navWidth * -1) + 'px'

//     return navBarStyle
//   }
}
