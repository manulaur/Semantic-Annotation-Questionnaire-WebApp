import { Component, OnInit } from '@angular/core';
import {QuestionnaireService} from '../questionnaire.service';
import {QuestionnaireItemModel} from '../_models/questionnaire-item.model';

@Component({
  selector: 'app-user-questionnaire',
  templateUrl: './user-questionnaire.component.html',
  styleUrls: ['./user-questionnaire.component.css']
})
export class UserQuestionnaireComponent implements OnInit {
  private qItem: QuestionnaireItemModel;

  constructor(private qService: QuestionnaireService) {
    this.qService.setupNewQuestionnaire();

    this.qService.selectedQItem.subscribe(
        data => {
          this.qItem = data;
        });
    // this.qItem = qService.selectedQItem();
  }

  ngOnInit() {
  }

  private startNewQuestionnaire(): void {
    console.log('start New Questionnaire');
    this.qService.setupNewQuestionnaire();
  }
}
