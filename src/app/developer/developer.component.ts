import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  constructor() {
  }


  ngOnInit(): void {
    this.setSkills();
  }

  public skillSet:Skill[] = [];
  
  setSkills():void {
    this.skillSet.push(new Skill("C", "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg", "https://fr.wikipedia.org/wiki/C_(langage)"));
    this.skillSet.push(new Skill("C++", "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg", "https://fr.wikipedia.org/wiki/C%2B%2B"));
    this.skillSet.push(new Skill("Javascript", "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg", "https://fr.wikipedia.org/wiki/JavaScript#:~:text=JavaScript%20est%20un%20langage%20de,utilis%C3%A9s%20par%20les%20d%C3%A9veloppeurs%20web."));  
  }
  
  public developer:Developer = new Developer("Dekeyser", "Numa", 30, "Male", "J'ai sommeil", this.skillSet);
}
