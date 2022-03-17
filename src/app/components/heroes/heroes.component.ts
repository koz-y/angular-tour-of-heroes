import { Component, OnInit } from '@angular/core';

import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';

import { Hero } from '../../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((data) => {
      this.heroes = data;
    });
  }
}
