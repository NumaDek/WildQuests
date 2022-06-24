import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Button } from '../models/button.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() public button: Button = new Button();
  @Output() public sendClickedButton:EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onClickedButton(): void {
    this.sendClickedButton.emit(this.button.name);
    this.button.isClicked = true;
  }
}
