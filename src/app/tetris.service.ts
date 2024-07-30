import { Injectable } from '@angular/core';
interface Point {
  x: number;
  y: number;
}

const PIECES = [
  // Define Tetris pieces (shapes and rotations)
  // Example for "I" piece
  [
    [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }],
    [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }]
  ],
  // Add other pieces (J, L, O, S, T, Z) here
];

@Injectable({
  providedIn: 'root'
})
export class TetrisService {
  private board: number[][];
  private currentPiece: Point[];
  private currentPieceIndex: number;
  private currentRotation: number;
  private position: Point;
  constructor() {
    this.resetGame();
   }


   resetGame() {
    this.board = Array.from({ length: 20 }, () => Array(10).fill(0));
    this.spawnPiece();
  }

  movePieceDown() {
    this.position.y += 1;
    if (this.checkCollision()) {
      this.position.y -= 1;
      this.placePiece();
      this.clearLines();
      this.spawnPiece();
    }
  }

  movePieceLeft() {
    if (this.currentPiece && this.position) {
      this.position.x -= 1;
      if (this.checkCollision()) {
        this.position.x += 1;
      }
    }
  }

  movePieceRight() {
    if (this.currentPiece && this.position) {
      this.position.x += 1;
      if (this.checkCollision()) {
        this.position.x -= 1;
      }
    }
  }

  rotatePiece() {
    if (this.currentPiece && this.position) {
      this.currentRotation = (this.currentRotation + 1) % PIECES[this.currentPieceIndex].length;
      if (this.checkCollision()) {
        this.currentRotation = (this.currentRotation - 1 + PIECES[this.currentPieceIndex].length) % PIECES[this.currentPieceIndex].length;
      }
    }
  }

  private spawnPiece() {
    this.currentPieceIndex = Math.floor(Math.random() * PIECES.length);
    this.currentRotation = 0;
    this.currentPiece = PIECES[this.currentPieceIndex][this.currentRotation];
    this.position = { x: 3, y: 0 };
    if (this.checkCollision()) {
      this.resetGame(); // Game over
    }
  }

  private checkCollision(): boolean {
    if (!this.currentPiece || !this.position) return true;
    for (const point of this.currentPiece) {
      const x = this.position.x + point.x;
      const y = this.position.y + point.y;
      if (x < 0 || x >= 10 || y >= 20 || (y >= 0 && this.board[y][x])) {
        return true;
      }
    }
    return false;
  }

  private placePiece() {
    for (const point of this.currentPiece) {
      const x = this.position.x + point.x;
      const y = this.position.y + point.y;
      if (y >= 0) {
        this.board[y][x] = 1;
      }
    }
  }

  private clearLines() {
    for (let y = 0; y < 20; y++) {
      if (this.board[y].every(cell => cell)) {
        this.board.splice(y, 1);
        this.board.unshift(Array(10).fill(0));
      }
    }
  }

  getBoard() {
    return this.board;
  }

  getCurrentPiece() {
    return this.currentPiece;
  }

  getPosition() {
    return this.position;
  }

}
