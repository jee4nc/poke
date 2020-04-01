import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Poke } from '../models/pokeModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {

  constructor(
    private http: HttpClient,
  ) { }
  getPikachu() {
    return this.http.get<Poke>(`${environment.API_URL}pokemon/pikachu`);
  }
}
