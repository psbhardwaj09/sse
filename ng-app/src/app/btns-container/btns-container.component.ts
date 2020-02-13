import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btns-container',
  templateUrl: './btns-container.component.html',
  styleUrls: ['./btns-container.component.scss']
})
export class BtnsContainerComponent {
  @Input() componentName: string;
  @Output() btnClick = new EventEmitter<number>();

  constructor() { }

  onBtnClick(btnNumber: number) {
    this.btnClick.emit(--btnNumber);
  }

}
