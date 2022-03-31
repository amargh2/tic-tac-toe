
const game = (function () {
    
    //board with values, used to evaluate win conditions

    const board = {
        box0:' ',
        box1:' ',
        box2:' ',
        box3: ' ',
        box4:' ',
        box5:' ',
        box6:' ',
        box7:' ',
        box8:' ',
    }
    
    //header manipulation
    header = document.querySelector('.header')
    //checks for win and publishes winner to the header
    function checkForXWin(board) {
        if (board.box0 =='x' && board.box1 =='x' && board.box2 =='x') {
            header.textContent = 'x wins'
        }
        if (board.box0 =='x' && board.box4 =='x' && board.box8 =='x') {
            header.textContent = 'X wins'
        }
        if (board.box3 =='x' && board.box4 =='x' && board.box5 =='x') {
            header.textContent = 'X wins'
        }
        if (board.box6 =='x' && board.box7 =='x' && board.box8 =='x') {
            header.textContent = 'X wins'
        }
        if (board.box2 =='x' && board.box5 =='x' && board.box8 =='x') {
            header.textContent = 'X wins'
        }
        if (board.box1 =='x' && board.box4 =='x' && board.box7 =='x') {
            header.textContent = 'X wins'
        }
        if (board.box0 =='x' && board.box3 =='x' && board.box6 =='x') {
            header.textContent = 'X wins'
        }    
    }
    
    function checkForOWin(board) {
        if (board.box0 =='o' && board.box1 =='o' && board.box2 =='o') {
            header.textContent = 'O wins'
        }
        if (board.box0 =='o' && board.box4 =='o' && board.box8 =='o') {
            header.textContent = 'O wins'
        }
        if (board.box3 =='o' && board.box4 =='o' && board.box5 =='o') {
            header.textContent = 'O wins'
        }
        if (board.box6 =='o' && board.box7 =='o' && board.box8 =='o') {
            header.textContent = 'O wins'
        }
        if (board.box2 =='o' && board.box5 =='o' && board.box8 =='o') {
            header.textContent = 'O wins'
        }
        if (board.box1 =='o' && board.box4 =='o' && board.box7 =='o') {
            header.textContent = 'O wins'
        }
        if (board.box0 =='o' && board.box3 =='o' && board.box6 =='o') {
            header.textContent = 'O wins'
        }
        
    }

    board.box0.indexOf()
    //this is ugly -- i admit it; but it felt like the easiest way at the time. will look into how to refactor/simplify this eventually. just wanted something working.
    //this is the click event listener that alters the game board as well as the board value
    gameSpace = document.querySelector('.gamespace')
    gameSpace.addEventListener('click', function(e){
        if (e.target.classList.contains('x')) {
            data = e.target.parentElement.dataset.id
            div = e.target.parentElement
            div.textContent = 'X'
            for (element in board) {
                if (data == element[3]) {
                    board[element] = 'x'
                    console.log(board.element)
                    
                }
            }
        }
        else if (e.target.classList.contains('o')) {
            data = e.target.parentElement.dataset.id
            div = e.target.parentElement
            div.textContent = 'O'
            for (element in board) {
                if (data == element[3]) {
                    board[element] = 'o'
                    console.log(board.element)
                }
            }
        }
        
        checkForXWin(board)
        checkForOWin(board)
    })

}())

//player factory function

/*const player = (name) {
    return name
} */
