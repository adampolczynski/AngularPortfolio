import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() imageThree;
  selectedIndex = 0;
  constructor() {}
  images = ["../../../assets/img/tracker.png", "../../../assets/img/frameworks.png"];
  images2 = ["../../../assets/img/chat.png", "https://media-cdn.tripadvisor.com/media/photo-s/04/5c/1a/e6/hardanger.jpg"]

  getColNumber() {
    if (this.selectedIndex == 0) {
      return 3;
    } else {
      return 1;
    }
  }
  ngOnInit() {

  }

}
