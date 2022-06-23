import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.scss']
})
export class CreateOnomatopiaComponent implements OnInit {
  public newOnomatopia: string = "";
  
  @Output()
  public sendOnomatopiaToParent:EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public createOnomatopia():void {
   this.sendOnomatopiaToParent.emit(this.newOnomatopia);
  }
}
