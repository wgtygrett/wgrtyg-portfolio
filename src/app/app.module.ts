import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './atoms/button/button.component';
import { HintTextComponent } from './atoms/hint-text/hint-text.component';
import { LabelComponent } from './atoms/label/label.component';
import { CheckboxComponent } from './molecules/checkbox/checkbox.component';
import { DialogComponent } from './molecules/dialog/dialog.component';
import { RadioButtonComponent } from './molecules/radio-button/radio-button.component';
import { SelectComponent } from './molecules/select/select.component';
import { TableComponent } from './molecules/table/table.component';
import { TextInputComponent } from './molecules/text-input/text-input.component';
import { FooterComponent } from './organisms/footer/footer.component';
import { HeaderComponent } from './organisms/header/header.component';
import { SideNavComponent } from './organisms/side-nav/side-nav.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TemplateComponent } from './pages/template/template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideRightComponent } from './animations/slide-right/slide-right.component';
import { CodeCogComponent } from './organisms/code-cog/code-cog.component';
import { BlankComponent } from './pages/blank/blank.component';
import { VerticalTimelineComponent } from './organisms/vertical-timeline/vertical-timeline.component';
import { ImageSliderComponent } from './organisms/image-slider/image-slider.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactFormComponent } from './organisms/contact-form/contact-form.component';
// import { DialogOpenCloseComponent } from './animations/dialog-open-close/dialog-open-close.component'


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HintTextComponent,
    LabelComponent,
    CheckboxComponent,
    // DialogComponent, // Have to import this, but leaving for reference
    RadioButtonComponent,
    SelectComponent,
    TableComponent,
    TextInputComponent,
    FooterComponent,
    HeaderComponent,
    SideNavComponent,
    AboutMeComponent,
    HomeComponent,
    NotFoundComponent,
    TemplateComponent,
    SlideRightComponent,
    // CodeCogComponent,
    BlankComponent,
    VerticalTimelineComponent,
    ImageSliderComponent,
    ContactComponent,
    ContactFormComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    DialogComponent,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    CodeCogComponent,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
