import {Component, OnInit, Input, NgModule} from '@angular/core';
import {QuestionnaireItemModel} from "../../_models/questionnaire-item.model";
import {QuestionnaireItemComponent} from "../../questionnaire-item/questionnaire-item.component";
import {QuestionnaireService} from "../../questionnaire.service";

@Component({
  selector: 'singleselection-question',
  templateUrl: './singleselection-question.component.html',
  styleUrls: ['./singleselection-question.component.css']
})
export class SingleselectionQuestionComponent implements OnInit {
  @Input() qItem: QuestionnaireItemModel;

  private answerCode:string;

  constructor(
    private parent: QuestionnaireItemComponent,
    private qService: QuestionnaireService
  ) { }

  ngOnInit() {
  }

  private handleSingleSelect(answerCode:string):void{
    this.answerCode = answerCode;
  }

  private nextQuestion():void{
    Object.assign(this.qItem.givenAnswerList,[this.answerCode]);
    this.answerCode = null;
    this.qService.updateQuestionnaire();
  }

}
