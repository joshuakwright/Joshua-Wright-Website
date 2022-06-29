import React, { useState } from 'react'
import './Project1.css'

export default function Project1() {
  const [grid, CallGenerateRandomGrid] = useState(Array(9).fill(0).map(x => Array(9).fill(0)));
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

  function GenerateRandomGrid() {
    let cells = [];
    let temp;

    for (let i = 0; i < 9; i++) {
	    for (let j = 0; j < 9; j++) {
			  temp = (i * 9) + j;
			  cells.push(temp);
        grid[i][j] = 0;
	    }
    } 
    solve(cells, 0)

    let emptySquares = 0
    while (emptySquares < 65) {
      let i = Math.floor(Math.random() * 10) % 9;
      let j = Math.floor(Math.random() * 10) % 9;

      if (!(grid[i][j] === 0)) {
        grid[i][j] = 0;
        emptySquares++;
      } 
    }

    return grid; 
  }

  function solve(cells, num) {
    if (num === cells.length) {return true;}
	
    let i = Math.floor(cells[num] / 9);
    let j = cells[num] % 9;
    
	  let values = valid_values(i, j);

    let lowest_vv = values;
    let lowest_vv_i = num;
    let min = values.length;
    for (let l = num + 1; l < cells.length; l++) {
      let m = Math.floor(cells[l] / 9);
      let n = cells[l] % 9;
      let temp = valid_values(m, n);
      if (temp.length < min) {
        lowest_vv_i = l;
        min = lowest_vv.length;
        lowest_vv = temp;
      }
    }
	  [cells[num], cells[lowest_vv_i]] = [cells[lowest_vv_i], cells[num]];

    i = Math.floor(cells[num] / 9);
    j = cells[num] % 9;

    values = valid_values(i, j);
    randomShuffle(values);

    if (values.length === 0) {
      return false;
    }

    for (let k = 0; k < values.length; k++) {
      grid[i][j] = values[k];
      if (solve(cells, num+1) === true) {
        return true;
      }
    }

	  grid[i][j] = 0;
	  return false;
  }

  function randomShuffle(values) {
    for (let i = values.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [values[i], values[j]] = [values[j], values[i]];
    }
  } 

  function valid_values(i, j) {
    let temp = grid[i][j];
    let validvals = [];
    let err = true;
  
    for (let k = 1; k <= 9; k++) {
      grid[i][j] = k;
      if (check_row(i, k) || check_col(j, k) || check_square(i, j, k)) {err = false;}
      if (err) { validvals.push(k);}
      err = true;
    }
    grid[i][j] = temp;
    return validvals;
  }

  function check_row(r, v) {
    let err = false;
    let incr = 0;
    for (let i = 0; i < 9; i++) {
      if (grid[r][i] === v) {incr++;}
    }
    if (incr > 1) {err = true;}
    return err;
  }

  function check_col(c, v) {
    let err = false;
    let incr = 0;
    for (let i = 0; i < 9; i++) {
      if (grid[i][c] === v) {incr++;}
    }
    if (incr > 1) {err = true;}
    return err;
  }

  function check_square(i, j, v) {
    let incr = 0;
    let err = false;
    let si = Math.floor(i / 3) * 3;
    let sj = Math.floor(j / 3) * 3;
  
    for (let k = si; k < (si + 3); k++) {
      for (let l = sj; l < (sj + 3); l++) {
        if (grid[k][l] === v) {incr++;}	
      }
    }
  
    if (incr > 1) {err = true;}
    return err;
  }

  return (
    <div>
      <button className='create-grid' onClick={() => {CallGenerateRandomGrid(GenerateRandomGrid()); CallUpdateBoard(UpdateBoard());}}>New Random Game</button>
      {board}
    </div>
  )
}
