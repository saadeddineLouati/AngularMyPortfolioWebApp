import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { ProjectEditComponent } from './projects-list/project-edit/project-edit.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ExpirienceComponent } from './about/expirience/expirience.component';
import { QualificationsComponent } from './about/qualifications/qualifications.component';
import { CertificationsComponent } from './about/certifications/certifications.component';
import { LanguageComponent } from './about/language/language.component';
import { InterestsComponent } from './about/interests/interests.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsListComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ProjectEditComponent,
    AboutComponent,
    SkillsComponent,
    ClientsComponent,
    ContactComponent,
    RessourcesComponent,
    HomeComponent,
    FooterComponent,
    ExpirienceComponent,
    QualificationsComponent,
    CertificationsComponent,
    LanguageComponent,
    InterestsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
