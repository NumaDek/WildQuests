import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WildQuests';

  public onomatopoeias: String[] = [];

  public onReceiveNewOnomatopia(event:string) {
    this.onomatopoeias.push(event);
  }
}
