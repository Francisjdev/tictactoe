// Function to create a game board
function createGameboard() {
    return {
        board: ['', '', '', '', '', '', '', '', '']
    };
}

// Function to create a player
function createPlayer(name, marker) {
    function placeMarker(index, board) {
        console.log("running function");
        console.log("index is " + index);
        displayGameBoard(board)
        if ((index >= 0 && index < board.length) && board[index] === '') {
            board[index] = marker;
            displayGameBoard(board)
    
        } else {
            console.log("invalid move");
        }
    }

    const getMarker = () => marker;
    return {
        name,
        getMarker,
        placeMarker
    };
}

// Function to display the game board
function displayGameBoard(board) {
    let display = '';
    for (let i = 0; i < board.length; i += 3) {
        display += ` ${board[i] || ' ' } | ${board[i + 1] || ' ' } | ${board[i + 2] || ' ' } \n`;
        if (i < 6) display += '---|---|---\n';
    }
    console.log(display);
}

// Example usage
const gameboard = createGameboard();
const fran = createPlayer('Fran', 'X');
const sam = createPlayer('Sam', 'O');


