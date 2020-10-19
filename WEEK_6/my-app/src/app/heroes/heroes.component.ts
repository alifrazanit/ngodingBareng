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
	selectedHero: Hero;
	onSelect(hero: Hero): void {
	  this.selectedHero = hero;
	  console.log(hero);
	}
	
	exdatapipe = {
		name: 'Alif Razan Saputra',
		numberDec: 80.84,
		cur:4000,
		per:80,
		birthday : new Date(1997, 9, 9) //bulan akan kelebihan 1
	}
	constructor() { }

	ngOnInit(): void {
		console.log(this.hero);
	}

	

}