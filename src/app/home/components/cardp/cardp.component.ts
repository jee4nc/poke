import { Component, OnInit } from '@angular/core';
import { PokeServiceService } from 'src/app/core/services/poke-service.service';
import { Poke } from 'src/app/core/models/pokeModel';

@Component({
  selector: 'app-cardp',
  templateUrl: './cardp.component.html',
  styleUrls: ['./cardp.component.scss']
})
export class CardpComponent implements OnInit {
  pikachu: Poke;
  constructor(
    private pokeServices: PokeServiceService
  ) { }

  ngOnInit(): void {
    this.fetchPoke();
  }

  fetchPoke() {
    this.pokeServices.getPikachu()
    .subscribe(pokes => {
      this.pikachu = pokes;
      console.log(pokes.name);
      console.log(pokes.sprites.front_default);
    });
  }
}
