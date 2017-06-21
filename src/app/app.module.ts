import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { JsonpModule } from '@angular/http';

import {
  MaterialModule, MdToolbarModule, MdButtonModule, MdCardModule, MdSidenavModule,
  MdInputModule, MdRadioModule, MdListModule, MdCheckboxModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { QuestionnaireService } from './questionnaire.service';
import { ServiceDiscoveryComponent } from './service-discovery/service-discovery.component';
import { QuestionnaireItemComponent } from './questionnaire-item/questionnaire-item.component';
import { SearchQuestionComponent } from './types/search-question/search-question.component';
import { SingleselectionQuestionComponent } from './types/singleselection-question/singleselection-question.component';
import { ValueinsertQuestionComponent } from './types/valueinsert-question/valueinsert-question.component';
import { MultiselectQuestionComponent } from './types/multiselect-question/multiselect-question.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AdminInsertCloudServiceComponent} from './admin-insert-cloud-service/admin-insert-cloud-service.component';
import { UserQuestionnaireComponent } from './user-questionnaire/user-questionnaire.component';

const appRoutes: Routes = [
  //{ path: '', component: HomeComponent },
  //{ path: '**', redirectTo: '' },
  { path: 'admin/insert', component: AdminInsertCloudServiceComponent},
  { path: 'question/:id', component: QuestionnaireItemComponent },
  { path: 'user/questionnaire', component: UserQuestionnaireComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ServiceDiscoveryComponent,
    QuestionnaireItemComponent,
    SearchQuestionComponent,
    SingleselectionQuestionComponent,
    ValueinsertQuestionComponent,
    MultiselectQuestionComponent,
    AdminInsertCloudServiceComponent,
    UserQuestionnaireComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdCardModule,
    MdSidenavModule,
    MdInputModule,
    MdRadioModule,
    MdListModule,
    MdCheckboxModule,
    JsonpModule,
    ReactiveFormsModule
  ],
  providers: [QuestionnaireService],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule { }
