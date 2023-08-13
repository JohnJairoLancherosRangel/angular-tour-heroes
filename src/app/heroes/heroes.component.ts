import { Component } from '@angular/core';
import { hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  hero : hero ={
    id: 1,
    name: 'Windstorm',
    altura: '2 Metros',
    sexo: 'Masculino' ,
    peso: '130 Kg',
    edad: '87 Años',
    poder: 'Generar Tormentas'

  };

}
