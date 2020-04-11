import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PokeServiceService} from './../../../core/services/poke-service.service';

@Component({
  selector: 'app-bar-search',
  templateUrl: './bar-search.component.html',
  styleUrls: ['./bar-search.component.scss']
})
export class BarSearchComponent implements OnInit {
  checkoutform;
  constructor(
    private formbuilder: FormBuilder,
    private pokeservice: PokeServiceService
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
      this.pokeservice.getPokebyID(poked.pokeid)
      .subscribe((newPoke) => {
        console.log(newPoke);
      });
    } else {
      console.log(this.checkoutform.value);
      console.log('error');
    }
    }
  }



