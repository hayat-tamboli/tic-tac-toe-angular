import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: string[];
  xIsNext: boolean;
  winner: string | any;
  xCount: number;
  oCount: number;
  initialisationTechnique: number;
  selectedItemFormControl: any;

  constructor() {
    this.xCount=0;
    this.oCount=0;
  }

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    // if(this.selectedItemFormControl==1){
    //   this.xIsNext = true; //x first
    // }
    // if(this.selectedItemFormControl==2){
    //   this.xIsNext = false; //o first
    // }
    // if(this.selectedItemFormControl==3){
    // this.xIsNext = Math.random()<0.5?true:false; //random
    // }
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if(!this.winner){
      if (!this.squares[idx]) {
        this.squares.splice(idx, 1, this.player);
        this.xIsNext = !this.xIsNext;
      }

      this.winner = this.calculateWinner();
      if(this.winner=="X"){
        this.xCount++;
      }
      if(this.winner=="O"){
        this.oCount++;
      }
      if(this.winner){
      setTimeout(()=> this.newGame(),2000);
      }
    }
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
  calculateWinnerCount() {

  }
}