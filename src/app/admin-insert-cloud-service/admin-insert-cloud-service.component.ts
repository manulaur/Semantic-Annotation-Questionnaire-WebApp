import { Component, OnInit } from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams, Jsonp} from '@angular/http';
import {EndpointSettings} from '../_settings/endpoint.settings';
import {Observable} from 'rxjs/Observable';
import {SearchResultModel} from '../_models/searchresult.model';

@Component({
  selector: 'app-admin-insert-cloud-service',
  templateUrl: './admin-insert-cloud-service.component.html',
  styleUrls: ['./admin-insert-cloud-service.component.css']
})
export class AdminInsertCloudServiceComponent implements OnInit {

  fieldResults$: Observable<SearchResultModel[]> = Observable.of(null);
  private options: RequestOptions;
  constructor(
      private http: Http,
      private jsonp: Jsonp) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: headers });
  }

  ngOnInit() {
  }


  public getFields(searchEl: string) {

    console.log('field received: ' + searchEl );

    let search = new URLSearchParams();
    search.set('object', searchEl);

    this.http.get(EndpointSettings.getInsertEndpoint(), { search })
        .map(response => response.json()).subscribe(
        data => {

          console.log('fieldResults ' + JSON.stringify(data));
          this.fieldResults$ = Observable.of(data);


        }, error => console.log('Could not query services'));
  }
}
