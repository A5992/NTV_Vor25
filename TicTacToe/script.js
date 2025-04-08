const board = document.getElementById('board');
const statusDisplay = document.getElementById('status');
const xWinsDisplay = document.getElementById('x-wins');
const oWinsDisplay = document.getElementById('o-wins');

let currentPlayer = 'O';
let startingPlayer = 'O';
let gameBoard = Array(9).fill(null);
let gameOver = false;
const cells = [];

let scoreX = 0;
let scoreO = 0;

const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function handleClick(index) {
    if (gameBoard[index] || gameOver) return;

    gameBoard[index] = currentPlayer;
    cells[index].textContent = currentPlayer;
    cells[index].classList.add('taken');

    const winner = checkWinner();
    if (winner) {
        if (winner === 'X') {
            scoreX++;
            xWinsDisplay.textContent = scoreX;
        } else {
            scoreO++;
            oWinsDisplay.textContent = scoreO;
        }
        statusDisplay.textContent = `Player ${winner} wins! 🎉`;
        gameOver = true;
        return;
    }

    if (gameBoard.every(cell => cell)) {
        statusDisplay.textContent = "It's a draw! 🤝";
        gameOver = true;
        return;
    }

    currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
    statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWinner() {
    for (const pattern of WIN_PATTERNS) {
        const [a, b, c] = pattern;
        if (
            gameBoard[a] &&
            gameBoard[a] === gameBoard[b] &&
            gameBoard[a] === gameBoard[c]
        ) {
            return gameBoard[a];
        }
    }
    return null;
}

function resetGame() {
    gameBoard = Array(9).fill(null);
    gameOver = false;
    currentPlayer = startingPlayer;
    statusDisplay.textContent = `Player ${currentPlayer}'s turn`;

    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('taken');
    });
}

function resetStats() {
    scoreX = 0;
    scoreO = 0;
    xWinsDisplay.textContent = '0';
    oWinsDisplay.textContent = '0';
}

function toggleStarter() {
    startingPlayer = startingPlayer === 'O' ? 'X' : 'O';
    alert(`Starter set to: ${startingPlayer}`);
    resetGame();
}

function createBoard() {
    for (let index = 0; index < 9; index++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = `cell-${index}`;
        cell.addEventListener('click', () => handleClick(index));
        board.appendChild(cell);
        cells.push(cell);
    }
}

createBoard();
