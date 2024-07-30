import { Component } from '@angular/core';
import { TetrisService } from '../tetris.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.css'
})
export class ControlsComponent {
constructor(public service:TetrisService){}

moveLeft(){
  this.service.movePieceLeft();
}

rotate(){
  this.service.rotatePiece();
}
moveRight(){
  this.service.movePieceRight();
}

moveDown(){
  this.service.movePieceDown();
}
}
