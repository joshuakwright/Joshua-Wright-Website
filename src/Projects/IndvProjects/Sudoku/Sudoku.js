import React, { useState } from 'react'
import './Sudoku.css'

export default function Sudoku() {
  const [grid, CallGenerateRandomGrid] = useState(Array(9).fill(0).map(x => Array(9).fill(0)));
  const [gameBoard, CallUpdateGameBoard] = useState(UpdateBoard());
  const [solvedBoard, CallSolveGameBoard] = useState(UpdateBoard());

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
      <div>
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

  function SolveSudokuGrid() {
    let cells = [];
    let temp;
    let initialized = false;

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (grid[i][j] === 0) {
          temp = (i * 9) + j;
          cells.push(temp);
        }
        else initialized = true;
      }
    }

    if (initialized) SolveGrid(cells, 0, false)

    return grid;
  }

  function GenerateRandomGrid(difficulty) {
    let cells = [];
    let temp;

    for (let i = 0; i < 9; i++) {
	    for (let j = 0; j < 9; j++) {
			  temp = (i * 9) + j;
			  cells.push(temp);
        grid[i][j] = 0;
	    }
    } 
    SolveGrid(cells, 0, true)

    let emptySquares = 0
    while (emptySquares < difficulty) {
      let i = Math.floor(Math.random() * 10) % 9;
      let j = Math.floor(Math.random() * 10) % 9;

      if (!(grid[i][j] === 0)) {
        grid[i][j] = 0;
        emptySquares++;
      } 
    }

    return grid; 
  }

  function SolveGrid(cells, num, generate) {
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
    if (generate) randomShuffle(values);

    if (values.length === 0) {
      return false;
    }

    for (let k = 0; k < values.length; k++) {
      grid[i][j] = values[k];
      if (SolveGrid(cells, num+1) === true) {
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
      <header className='sudoku'>Sudoku</header>
      <div className='container'>
        <div className='sudoku-desc'>
          <p>
            Welcome to my custom Sudoku generator! All you have to do is 
            choose the difficulty and start solving (unfortunately, for 
            now you'll have to copy it onto your own paper). If you get 
            stuck, no problem. Just click the solve button and the solution 
            instantly shows up on the right grid. Good luck!
          </p>
          <p>
            Putting the obvious aside, this program is based on one of my 
            early projects from my first data structures and algorithms class. 
            Originally all it could do was solve a Sudoku game given to it 
            as a text file. But I've since adapted the solution algorithm 
            (just some simple recursion) to both create and solve Sudoku games. 
          </p>
          <p>
            Right now there are only easy, medium, and hard difficulties, which 
            are solely characterized by the amount of empty spaces on the board. 
            However, many of these randomly generated games have multiple solutions, 
            making them easier than their mono-solution counterparts. In the future 
            I plan on implementing a new 'Extreme' difficulty, wherein the board will 
            be guaranteed to have only one solution and the absolute minimum number 
            of filled squares… 17. 
          </p>
          <p>
            Fun Fact: It's never been proven that the fewest squares a single-solution 
            sudoku board can have is 17, that's just what Sudoku enthusiasts say. 
          </p>
        </div>
        <div className='generate-grid'>
          {gameBoard}
        </div>
        <div className='solve-grid'>
          {solvedBoard}
        </div>
      </div>
      <button className='sudoku-button easy-button' onClick={() => {CallGenerateRandomGrid(GenerateRandomGrid(45)); CallUpdateGameBoard(UpdateBoard("generate"));}}>Easy Game</button>
      <button className='sudoku-button medium-button' onClick={() => {CallGenerateRandomGrid(GenerateRandomGrid(55)); CallUpdateGameBoard(UpdateBoard("generate"));}}>Medium Game</button>
      <button className='sudoku-button hard-button' onClick={() => {CallGenerateRandomGrid(GenerateRandomGrid(65)); CallUpdateGameBoard(UpdateBoard("generate"));}}>Hard Game</button>
      <button className='sudoku-button solve-button' onClick={() => {CallGenerateRandomGrid(SolveSudokuGrid()); CallSolveGameBoard(UpdateBoard("solve"))}}>Solve Game</button>
    </div>
  )
}

//Future idea for cool retro page title
/* 
<div className='sudoku'>
        <p>  
              ________  ___  ___  ________  ________  ___  __    ___  ___                                                      
        </p>
        <p>
            |\   ____\|\  \|\  \|\   ___ \|\   __  \|\  \|\  \ |\  \|\  \    
        </p>
        <p>
            \ \  \___|\ \  \\\  \ \  \_|\ \ \  \|\  \ \  \/  /|\ \  \\\  \   
        </p>
        <p>
              \ \_____  \ \  \\\  \ \  \ \\ \ \  \\\  \ \   ___  \ \  \\\  \ 
        </p>
        <p>
                \|____|\  \ \  \\\  \ \  \_\\ \ \  \\\  \ \  \\ \  \ \  \\\  \ 
        </p>
        <p>
                  ____\_\  \ \_______\ \_______\ \_______\ \__\\ \__\ \_______\                                                  
        </p>
        <p>
                |\_________\|_______|\|_______|\|_______|\|__| \|__|\|_______|
        </p>
        <p>
                \|_________|
        </p>
      </div>
*/
