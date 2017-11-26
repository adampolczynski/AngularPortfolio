import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() imageThree;
  selectedIndex = 0;
  active: Array<boolean>=[true,false,false,false];
  activeNumber: Number = 0;

  constructor() {}

  setActive(number) {
    for (let i = 0; i < this.active.length; ++i) {
      this.active[i] = false;
    }
    this.active[number] = true;
    this.activeNumber = number;
  }
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
