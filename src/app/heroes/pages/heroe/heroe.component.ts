import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    ` 
    img {
      width: 100%;
      border-radius: 5px;
    }
    ` 
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor( private activateRoute: ActivatedRoute,
               private heroeService: HeroesService,
               private router      : Router) { }

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap( ( param ) => this.heroeService.getHeroePorId( param.id ))
    )
    .subscribe( ( heroe ) => this.heroe = heroe);
  }

  regresar(){
    this.router.navigate(['/heroes/listado']);
  }

}
