import { Component, OnInit } from '@angular/core';
import { Heroes } from './heroes';
import { HEROES } from './mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
	 heroes = HEROES;
  selectedHero: Heroes;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Heroes): void {
    this.selectedHero = hero;
  }

	

}
