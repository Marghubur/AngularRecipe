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
import { PaginationDirective } from './directives/pagination.directive';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchPipe } from './Pipe/search.pipe';
import { FilterComponent } from './filter/filter.component';
import { Pagination2Component } from './pagination2/pagination2.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { InterviewqstComponent } from './interviewqst/interviewqst.component';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { TableComponent } from './table/table.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ViewStudentComponent } from './view-student/view-student.component';

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
    LinksComponent,
    PaginationDirective,
    PaginationComponent,
    SearchPipe,
    FilterComponent,
    Pagination2Component,
    InterviewqstComponent,
    RichTextEditorComponent,
    AutocompleteComponent,
    TableComponent,
    StudentListComponent,
    ViewStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
