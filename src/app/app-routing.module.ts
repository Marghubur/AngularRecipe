import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';
import { InputChipComponent } from './input-chip/input-chip.component';
import { InterviewqstComponent } from './interviewqst/interviewqst.component';
import { LinksComponent } from './links/links.component';
import { ListComponentsComponent } from './list-components/list-components.component';
import { PaginationComponent } from './pagination/pagination.component';
import { Pagination2Component } from './pagination2/pagination2.component';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';
import { WebsiteComponent } from './website/website.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { TableComponent } from './table/table.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ViewStudentComponent } from './view-student/view-student.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'input-chip', component: InputChipComponent},
  {path: 'about', component: AboutusComponent},
  {path: 'contact', component: ContactusComponent},
  {path: 'accordion', component: AccordionComponent},
  {path: 'components', component: ListComponentsComponent},
  {path: 'websites', component: WebsiteComponent},
  {path: 'links', component: LinksComponent},
  {path: 'filtter', component: FilterComponent},
  {path: 'interview', component: InterviewqstComponent},
  {path: 'richtexteditor', component: RichTextEditorComponent},
  {path: 'pagination1', component: PaginationComponent},
  {path: 'pagination2', component: Pagination2Component},
  {path: 'autocomplete', component: AutocompleteComponent},
  {path: 'table', component: TableComponent},
  {path: 'studentlist', component: StudentListComponent},
  {path: 'studentview', component: ViewStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
