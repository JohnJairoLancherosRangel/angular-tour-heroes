import { Component } from '@angular/core';
import { hero } from '../hero';
import { Heroes } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {


  hero : hero ={
    id: 1,
    imagen : 'https://static.wikia.nocookie.net/marveldatabase/images/e/e6/Windstorm_%28Earth-616%29_from_Marvel_Super-Heroes_Vol_2_6_0001.png/revision/latest?cb=20130515195849',
    name: 'Windstorm',
    altura: '2 Metros',
    sexo: 'Masculino' ,
    peso: '130 Kg',
    edad: '87 Años',
    poder: 'Generar Tormentas'

  };

  heroes = Heroes;

}
