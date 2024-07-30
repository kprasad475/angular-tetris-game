import { Component, OnInit } from '@angular/core';
import { TetrisService } from '../tetris.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit {


  constructor(public service:TetrisService){

  }
  getCellClass(x: number, y: number): string {
    const piece = this.service.getCurrentPiece();
    const position = this.service.getPosition();
    if (!piece || !position) return '';
    for (const point of piece) {
      if (position.x + point.x === x && position.y + point.y === y) {
        return 'filled';
      }
    }
    return this.service.getBoard()[y][x] ? 'filled' : '';
  }

  ngOnInit(): void {
      
  }
}
