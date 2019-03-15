import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        width: '200px',
      })),
      state('closed', style({
        display: 'none',
        width: '0px',
      })),
      transition('* => *', [
        animate('0.2s')
      ]),
    ]),
  ]
})
export class HeaderComponent implements OnInit {

  @Input() isCollapsed;
  @Output() changeCollapsed = new EventEmitter();
  documentClickListener: any;
  isOpen = false;
  isShow = false;
  constructor() { }

  ngOnInit() {
    document.addEventListener('click', (e) => {
      this.isOpen = false;
    });
  }

  stopPropagation(e: Event) {
    const ev = e || window.event;
    if (ev.stopPropagation) {
      ev.stopPropagation();
    }
  }

  searchInput(e: Event) {
    this.stopPropagation(e);
  }

  overPanel() {
    this.isShow = !this.isShow;
    console.log(1);
  }

  open(e) {
    this.isOpen = !this.isOpen;
    this.stopPropagation(e);
  }
}
