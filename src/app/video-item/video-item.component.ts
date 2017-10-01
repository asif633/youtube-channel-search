import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  @Input() video: any;

}
