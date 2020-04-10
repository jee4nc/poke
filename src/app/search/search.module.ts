import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchLayoutComponent } from './components/search-layout/search-layout.component';
import { BarSearchComponent } from './components/bar-search/bar-search.component';
import { MaterialModule } from './../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SearchLayoutComponent, BarSearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SearchModule { }
