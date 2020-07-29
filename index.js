function printCurrentGameState(gameState) {
  const { numDisks, board, move } = gameState;
  const disks = {
    0: '         |         ',
    1: '        ---        ',
    2: '       -----       ',
    3: '      -------      ',
    4: '     ---------     ',
    5: '    -----------    ',
    6: '   -------------   ',
    7: '  ---------------  ',
    8: ' ----------------- ',
  };
  console.log(`| Move: ${move}`);
  console.log('| \n');
  for (let row = numDisks - 1; row >= 0; row -= 1) {
    let rowString = '| ';
    rowString += `${disks[board[0][row]] || disks[0]} `;
    rowString += `${disks[board[1][row]] || disks[0]} `;
    rowString += disks[board[2][row]] || disks[0];
    rowString += ' ';
    console.log(`${rowString}`);
  }
  console.log(`| ${'‾'.repeat(19)} ${'‾'.repeat(19)} ${'‾'.repeat(19)}`);
}

const sampleSolution = '02,01,21,02,10,12,02';

function printGame(n, solution) {
  const initialStack = [];
  for (let i = n; i > 0; i -= 1) {
    initialStack.push(i);
  }
  const gameState = {
    numDisks: n,
    board: [initialStack, [], []],
    move: 0,
  };
  printCurrentGameState(gameState);

  const solutionAsArr = solution.split(',');
  solutionAsArr.forEach(move => {
    const from = move.charAt(0);
    const to = move.charAt(1);
    const diskToMove = gameState.board[from].pop();
    gameState.board[to].push(diskToMove);

    gameState.move += 1;

    printCurrentGameState(gameState);
  });
}

// printGame(3, sampleSolution);

function towerOfHanoiRecursive(n, currentPeg = 0, targetPeg = 2) {
  const otherPeg =
    [0, 1, 2].filter(peg => {
      if (peg !== currentPeg && peg !== targetPeg) {
        return peg;
      }
    })[0] || 0;

  if (n === 2) {
    // [c, o], [c, t], [o, t]
    const move1 = `${currentPeg}${otherPeg}`;
    const move2 = `${currentPeg}${targetPeg}`;
    const move3 = `${otherPeg}${targetPeg}`;
    return `${move1},${move2},${move3}`;
  }

  const recursiveCall1 = towerOfHanoiRecursive(n - 1, currentPeg, otherPeg);
  const middleMove = `${currentPeg}${targetPeg}`;
  const recursiveCall2 = towerOfHanoiRecursive(n - 1, otherPeg, targetPeg);

  return `${recursiveCall1},${middleMove},${recursiveCall2}`;
}

function towerOfHanoi(numDisks) {
  if (!numDisks || numDisks < 3 || numDisks > 8) {
    return 'number of disks must be >= 3 and <= 8';
  }
  const solution = towerOfHanoiRecursive(numDisks);
  printGame(numDisks, solution);
}

// console.log(towerOfHanoi(3));
// console.log(towerOfHanoi(4));
