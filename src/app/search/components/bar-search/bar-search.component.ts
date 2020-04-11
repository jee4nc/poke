import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PokeServiceService} from './../../../core/services/poke-service.service';
import {Router} from '@angular/router';
import { Poke } from 'src/app/core/models/pokeModel';

@Component({
  selector: 'app-bar-search',
  templateUrl: './bar-search.component.html',
  styleUrls: ['./bar-search.component.scss']
})
export class BarSearchComponent implements OnInit {
  checkoutform;
  pokemon: Poke;
  constructor(
    private formbuilder: FormBuilder,
    private pokeservice: PokeServiceService,
    private router: Router
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }
  private buildForm() {
    this.checkoutform = this.formbuilder.group({
      pokeid: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }
  get pokeidField() {
    return this.checkoutform.get('pokeid');
  }
  onSubmit(event: Event) {
    event.preventDefault();
    if (this.checkoutform.valid) {
      const poked = this.checkoutform.value;
      const id = poked.pokeid;
      this.pokeservice.getPokebyID(id)
      .subscribe((newPoke) => {
        console.log(newPoke);
        this.pokemon = newPoke;
        // this.router.navigate([`./search/${poked.pokeid}`]);
      });
    } else {
      console.log(this.checkoutform.value);
      console.log('error');
    }
    }
  }



