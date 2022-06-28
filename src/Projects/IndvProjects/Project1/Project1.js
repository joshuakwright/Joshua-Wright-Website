import React, { useState } from 'react'
import './Project1.css'

export default function Project1() {
  const [grid, CallUpdateGrid] = useState(Array(9).fill(0).map(x => Array(9).fill(0)));
  const [board, CallUpdateBoard] = useState(UpdateBoard());

  function UpdateBoard() {
    let board = [];

    for (let i = 0; i < 9; i++) {
      let row = "";
      for (let j = 0; j < 9; j++) {
        if (j === 0) row = "|  " + grid[i][j];
        else if (j % 3 === 0) row += "  |  " + grid[i][j];
        else row += "  " + grid[i][j];
      }
      row += "  |";
      board.push(row);

      if (i % 3 === 2 && i !== 8) board.push("| ------------------------------- |");
    }

    return (
      <div className='board'>
        <span>| ------------------------------- |</span><br></br>
        {board.map((row, index) => {
          return (
            <div key={index}>
              <span>{row}</span><br></br>
            </div>
          )})}
        <span>| ------------------------------- |</span><br></br>
      </div>
    );
  }

  function UpdateGrid() {
    grid.forEach(arr => {arr.forEach((num, index) => arr[index] = num + 1)})
    return grid; 
  }
  
  return (
    <div>
      <button className='create-grid' onClick={() => {CallUpdateGrid(UpdateGrid()); CallUpdateBoard(UpdateBoard());}}>Change Number</button>
      {board}
    </div>
  )
}
