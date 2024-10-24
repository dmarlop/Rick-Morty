import { Component, OnInit } from '@angular/core';
import { CharactersService } from '@app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {
  character: any; 
  
  constructor(private characterService: CharactersService) {}

  ngOnInit(): void {
    this.characterService.findCharacterById(1).subscribe(data => {
      this.character = data; // Asigna el resultado a la variable character
    });
  }
}
