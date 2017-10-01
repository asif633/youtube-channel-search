import { Component, OnInit } from '@angular/core';
import { API_URL, API_KEY } from './youtube.config';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  channelId: string;
  nextPageToken: string;
  pageInfo: { totalResults, resultsPerPage };
  items: any[];
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  endPage: boolean;
  error: string;

  constructor(private _http: Http) {

  }

  ngOnInit() {
    this.endPage = false;
  }

  searchChannel() {
    this.endPage = false;
    this.error = null;
    this._http.get(`${API_URL}?channelId=${this.channelId}&part=snippet,id&order=date&maxResults=25&key=${API_KEY}`)
      .map(res => res.json())
      .subscribe(res => {
        this.nextPageToken = res.nextPageToken;
        console.log('page token', this.nextPageToken, res.nextPageToken);
        this.pageInfo = { totalResults: res.pageInfo.totalResults, resultsPerPage: res.pageInfo.resultsPerPage };
        this.items = res.items;
      },
      error => this.error =  error.json().error.message
    );
  }

  onScrollDown() {
    if (this.nextPageToken !== undefined) {
      this._http.get(`${API_URL}?pageToken=${this.nextPageToken}
                    &channelId=${this.channelId}
                    &part=snippet,id&order=date&maxResults=25&key=${API_KEY}`)
        .map(res => res.json())
        .subscribe(res => {
          this.nextPageToken = res.nextPageToken;
          this.pageInfo = { totalResults: res.pageInfo.totalResults, resultsPerPage: res.pageInfo.resultsPerPage };
          this.items = this.items.concat(res.items);
        });
    }else {
      console.log('end of page');
      this.endPage = true;
    }
  }

}
