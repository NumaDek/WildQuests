import { Component } from '@angular/core';
import { Kitten } from './models/kitten.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public kittenList: Kitten[] = [];

  public onReceivedNewKitten(event: Kitten): void {
    this.kittenList.push(event);
    console.log("J'ai reçu ", event);
  }
}
