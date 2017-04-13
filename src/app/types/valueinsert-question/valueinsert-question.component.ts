import {Component, OnInit, Input} from '@angular/core';
import {QuestionnaireItemComponent} from "../../questionnaire-item/questionnaire-item.component";
import {QuestionnaireService} from "../../questionnaire.service";
import {QuestionnaireItemModel} from "../../_models/questionnaire-item.model";

@Component({
  selector: 'valueinsert-question',
  templateUrl: './valueinsert-question.component.html',
  styleUrls: ['./valueinsert-question.component.css']
})
export class ValueinsertQuestionComponent implements OnInit {
  @Input() qItem: QuestionnaireItemModel;

  private answerValue:string;
  private comparisonAnswerCode:string;

  constructor(
    private parent: QuestionnaireItemComponent,
    private qService: QuestionnaireService
  ) { }

  ngOnInit() {
  }

  private handleOperationsSingleSelect(answerCode:string):void{
    this.comparisonAnswerCode = answerCode;
    console.log("set comparisonAnswer " +this.comparisonAnswerCode);
  }

  private nextQuestion():void{
    Object.assign(this.qItem.givenAnswerList,[this.answerValue]);
    this.qItem.comparisonAnswer = this.comparisonAnswerCode;
    this.answerValue = null;
    this.qService.updateQuestionnaire();
  }

}
