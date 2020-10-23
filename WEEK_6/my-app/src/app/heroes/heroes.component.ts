import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Heroes } from './heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
	heroes: Heroes[];
  selectedHero: Heroes;
  constructor(
    private heroservice:HeroService
  ) { }
  getHeroes():void{
    this.heroes = this.heroservice.getHeroes();
  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Heroes): void {
    this.selectedHero = hero;
  }
}
