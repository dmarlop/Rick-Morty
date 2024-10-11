import { Component, OnInit } from '@angular/core';
import { CharactersService } from '@app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit{

  constructor(
    public characterService: CharactersService
  ){}

  ngOnInit(): void {
      console.log(this.characterService.findCharacterById);
  }

}
