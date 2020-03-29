import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [CardComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
  ]
})
export class HomeModule { }
