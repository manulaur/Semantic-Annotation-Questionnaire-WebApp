import {Component, OnInit, Input} from '@angular/core';
import {QuestionnaireItemComponent} from "../../questionnaire-item/questionnaire-item.component";
import {QuestionnaireService} from "../../questionnaire.service";
import {QuestionnaireItemModel} from "../../_models/questionnaire-item.model";

@Component({
  selector: 'multiselect-question',
  templateUrl: './multiselect-question.component.html',
  styleUrls: ['./multiselect-question.component.css']
})
export class MultiselectQuestionComponent implements OnInit {
  @Input() qItem: QuestionnaireItemModel;

  private answerCode:string[] =[];

  constructor(
    private qService: QuestionnaireService
  ) { }

  ngOnInit() {
  }

  private handleMultiSelect(answerID):void{
    let index = this.answerCode.indexOf(answerID, 0);
    if(index==-1) {
      //add item
      this.answerCode.push(answerID);
    }else{
      //remove item
      this.answerCode.splice(index, 1);
    }
  }

  private nextQuestion():void{
    Object.assign(this.qItem.givenAnswerList,this.answerCode);
    this.answerCode = [];
    this.qService.updateQuestionnaire();
  }
}
