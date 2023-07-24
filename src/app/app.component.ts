import { Component } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';

  winMessage: string = '';
  isCross: boolean = false;

  itemArray: string[] = new Array(9).fill('empty');

  constructor(private toastr: ToastrService) { }


  handleClick = (itemNumber: number) => {
    if(this.winMessage){
      return this.toastr.success(this.winMessage);
    }

    if(this.itemArray[itemNumber] === 'empty'){
      this.itemArray[itemNumber] = this.isCross ? 'cross' : 'circle';

      this.isCross = !this.isCross;
    }
    else{
      return this.toastr.info("Already Filled.")
    }

    
    this.checkIsWinner();
    return ''
  }



  checkIsWinner = () => {
    // Define all possible winning combinations as arrays of indices
    const winningCombinations: number[][] = [
      [0, 1, 2], // Top row
      [3, 4, 5], // Middle row
      [6, 7, 8], // Bottom row
      [0, 3, 6], // Left column
      [1, 4, 7], // Middle column
      [2, 5, 8], // Right column
      [0, 4, 8], // Diagonal from top-left to bottom-right
      [2, 4, 6]  // Diagonal from top-right to bottom-left
    ];

    // Loop through each winning combination and check if there's a winner
    for (const combination of winningCombinations) {
      const [i, j, k] = combination;
      if (this.itemArray[i] !== 'empty' && this.itemArray[i] === this.itemArray[j] && this.itemArray[i] === this.itemArray[k]) {
        // return this.itemArray[i]; // Return the winner ('X' or 'O')
        this.winMessage = "Winner is " + this.itemArray[i];
      }
    }
    if(!this.itemArray.includes('empty') && !this.winMessage){
      this.winMessage = "Draw match!!!"
    }

    // return ''; // No winner found
  }



  reloadGame = () => {
    this.winMessage = '';
    this.isCross = false;
    this.itemArray = new Array(9).fill('empty');
  }

}
