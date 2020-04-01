import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeServiceService } from './services/poke-service.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    PokeServiceService
  ]
})
export class CoreModule { }
