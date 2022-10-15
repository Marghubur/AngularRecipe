import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { InputChipComponent } from './input-chip/input-chip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListComponentsComponent } from './list-components/list-components.component';
import { WebsiteComponent } from './website/website.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    InputChipComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    FooterComponent,
    HeaderComponent,
    ListComponentsComponent,
    WebsiteComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
