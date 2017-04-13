import { Component } from '@angular/core';
import { QuestionnaireService } from './questionnaire.service';
import {QuestionnaireItemModel} from "./_models/questionnaire-item.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private qItem:QuestionnaireItemModel;

  //private isQuestionnaireCompleted;

  constructor(
    private qService: QuestionnaireService) {
    this.qService.setupNewQuestionnaire();

    this.qService.selectedQItem.subscribe(
      data => {
        this.qItem = data;
      });
    //this.qItem = qService.selectedQItem();
  }

  private startNewQuestionnaire(): void{
    console.log("start New Questionnaire")
    this.qService.setupNewQuestionnaire();
  }

}
