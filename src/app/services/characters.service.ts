import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  baseUrl: string = "https://rickandmortyapi.com/api/character";

  constructor(
    private http: HttpClient
  ){}

  findAllCharacters(): Observable<any>{
    return this.http.get(this.baseUrl);
  }

  findCharacterById(id: number): Observable<any>{
    return this.http.get(this.baseUrl + "/" + id);
  }
}
