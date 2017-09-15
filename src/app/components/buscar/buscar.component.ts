import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {Heroe, HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;
  sinResultados: boolean = true;

  constructor(private activateRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private router: Router) {


  }

  ngOnInit() {

    this.activateRoute.params.subscribe(params => {
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      this.sinResultados = !(this.heroes.length > 0);
      this.termino = params['termino'];
    });
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }


}
