import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {Heroe, HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  heroesData: Heroe[] = [];
  heroes: Heroe[] = [];

  constructor(private activateRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private router: Router) {

    this.activateRoute.params.subscribe(params => {
      for (let heroe of this.heroesData) {
        if ((heroe.nombre).toLowerCase() === params['termino'].toLowerCase()) {
          this.heroes.push(heroe);

        }
      }

    });
  }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }


}
