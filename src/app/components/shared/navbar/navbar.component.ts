import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  heroes: any = [];

  constructor(private router: Router) {


  }

  ngOnInit() {
  }

  buscarHeroe(termino: string) {
    this.router.navigate( ['/buscar', termino] );
  }

}
