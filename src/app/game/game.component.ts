import { Component, OnInit } from '@angular/core';
import { TetrisService } from '../tetris.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit{

constructor(public service:TetrisService){}
  ngOnInit(): void {
      this.service.resetGame();
  }

  // Methods to handle user input

}
