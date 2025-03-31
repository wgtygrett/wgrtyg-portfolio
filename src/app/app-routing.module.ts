import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { TemplateComponent } from './pages/template/template.component'
import { AboutMeComponent } from './pages/about-me/about-me.component'
import { BlankComponent } from './pages/blank/blank.component'

const routes: Routes = [
  // { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '', component: TemplateComponent, pathMatch: 'full' }, // NOTE: Setting this as the home for now until i think of something cool. cat pics?
  // { path: 'template', component: TemplateComponent, pathMatch: 'full' },
  { path: 'aboutme', component: AboutMeComponent, pathMatch: 'full' },
  { path: 'blank', component: BlankComponent, pathMatch: 'full' },

  { path: '**', component: NotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
