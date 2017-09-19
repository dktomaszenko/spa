import {Component, OnInit} from '@angular/core';
import {HeroesService, Heroe} from '../../services/heroes.service';
import {Router} from '@angular/router';

declare let _: any;

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService, private router: Router) {
  }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();
    console.log(_.chunk(['a', 'b', 'c', 'd'], 2));

  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }



}
