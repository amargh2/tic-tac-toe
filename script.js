
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
            header.textContent = 'x WINS!'
        }
        if (board.box0 =='x' && board.box4 =='x' && board.box8 =='x') {
            header.textContent = 'X WINS!'
        }
        if (board.box3 =='x' && board.box4 =='x' && board.box5 =='x') {
            header.textContent = 'X WINS!'
        }
        if (board.box6 =='x' && board.box7 =='x' && board.box8 =='x') {
            header.textContent = 'X WINS!'
        }
        if (board.box2 =='x' && board.box5 =='x' && board.box8 =='x') {
            header.textContent = 'X WINS!'
        }
        if (board.box1 =='x' && board.box4 =='x' && board.box7 =='x') {
            header.textContent = 'X WINS!'
        }
        if (board.box0 =='x' && board.box3 =='x' && board.box6 =='x') {
            header.textContent = 'X WINS!'
        }    
    }
    
    function checkForOWin(board) {
        if (board.box0 =='o' && board.box1 =='o' && board.box2 =='o') {
            header.textContent = 'O WINS!'
        }
        if (board.box0 =='o' && board.box4 =='o' && board.box8 =='o') {
            header.textContent = 'O WINS!'
        }
        if (board.box3 =='o' && board.box4 =='o' && board.box5 =='o') {
            header.textContent = 'O WINS!'
        }
        if (board.box6 =='o' && board.box7 =='o' && board.box8 =='o') {
            header.textContent = 'O WINS!'
        }
        if (board.box2 =='o' && board.box5 =='o' && board.box8 =='o') {
            header.textContent = 'O WINS!'
        }
        if (board.box1 =='o' && board.box4 =='o' && board.box7 =='o') {
            header.textContent = 'O WINS!'
        }
        if (board.box0 =='o' && board.box3 =='o' && board.box6 =='o') {
            header.textContent = 'O WINS!'
        }
        
    }

    board.box0.indexOf()
//defines the visual boardspace and the click event; uses the listener
//to change the targeted button's parent element to the selected value, 
// which we find through the button's class name; then iterates
//through the board object with the data id of the div
 //to update the value of the board
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
