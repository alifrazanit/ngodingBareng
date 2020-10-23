import { Injectable } from '@angular/core';
import { Heroes } from './heroes/heroes';
import { HEROES } from './heroes/mock-heroes';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Heroes[]{
    return HEROES;
  }
}
