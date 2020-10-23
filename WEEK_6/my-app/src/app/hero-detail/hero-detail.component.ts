import { Component, OnInit, Input } from '@angular/core';
import { Heroes } from '../heroes/heroes';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() Hero: Heroes;
  constructor() { }

  ngOnInit(): void {
  }

}
