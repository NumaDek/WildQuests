import { Component, EventEmitter } from '@angular/core';
import { Button } from './models/button.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'WildQuests';
  public sendClickedButton:EventEmitter<string> = new EventEmitter();
  public allClicked: boolean = false;
  public buttons:Button[] = [
    new Button("Toto", false),
    new Button("Tata", false),
    new Button("Tutu", false),
    new Button("Tete", false),
    new Button("Titi", false),
  ];

  public isEveryButtonsClicked(): boolean {
    let witness: number = 1;
    this.buttons.map(button => button.isClicked ? witness += 1: witness);
    console.log("J'en ai %d de cliqués.", witness);
    return (witness === this.buttons.length || witness === this.buttons.length + 1)
  }

  public onReceivedButtonClicked(event: string): void {
    this.title = event;
    this.allClicked = this.isEveryButtonsClicked();
  }
}
