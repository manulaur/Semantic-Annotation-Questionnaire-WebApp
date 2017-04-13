import {QuestionnaireItemModel} from './questionnaire-item.model';

export class QuestionnaireModel {

  public questionItemList:QuestionnaireItemModel[];
  public completed:boolean;
  public lastQuestionID:number;
  public currentQuestionDomain:string;
  public completedQuestionDomainList:string[];

}
