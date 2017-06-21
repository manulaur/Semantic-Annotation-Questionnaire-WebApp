import { Component } from '@angular/core';
import { QuestionnaireService } from './questionnaire.service';
import { QuestionnaireItemModel} from "./_models/questionnaire-item.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    ) {
    console.log("welcome!");
  }



}
