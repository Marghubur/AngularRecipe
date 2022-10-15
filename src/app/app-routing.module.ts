import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { InputChipComponent } from './input-chip/input-chip.component';
import { LinksComponent } from './links/links.component';
import { ListComponentsComponent } from './list-components/list-components.component';
import { WebsiteComponent } from './website/website.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
