import {AnswerModel} from './answer.model';

export class QuestionnaireItemModel {

  questionLabel:string;
  questionURI:string;
  questionID:number;
  answerList:AnswerModel[];
  answerDatatype:string;
  givenAnswerList:string[];
  searchNamespace:string;
  comparisonOperationAnswers:AnswerModel[];
  comparisonAnswer:string;
}
