
const game = (function () {
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
    
    header = document.querySelector('.header')

    function checkForXWin(board) {
        if (board.box0 =='x' && board.box1 =='x' && board.box2 =='x') {
            header.textContent += 'x wins'
        }
        if (board.box0 =='x' && board.box4 =='x' && board.box8 =='x') {
            console.log('x wins')
        }
        if (board.box3 =='x' && board.box4 =='x' && board.box5 =='x') {
        console.log('x wins')
        }
        if (board.box6 =='x' && board.box7 =='x' && board.box8 =='x') {
            console.log('x wins')
        }    
    }
    
    function checkForOWin(board) {
        if (board.box0 =='o' && board.box1 =='o' && board.box2 =='o') {
        console.log('o wins')
        }
        if (board.box0 =='o' && board.box4 =='o' && board.box8 =='o') {
            console.log('o wins')
        }
        if (board.box3 =='o' && board.box4 =='o' && board.box5 =='o') {
        console.log('o wins')
        }
        if (board.box6 =='o' && board.box7 =='o' && board.box8 =='o') {
            console.log('o wins')
        }
    }
    
    const divMappings = {
        div0: document.querySelector("[data-id='0']"),
        div1: document.querySelector("[data-id='1']"),
        div2: document.querySelector("[data-id='2']"),
        div3: document.querySelector("[data-id='3']"),
        div4: document.querySelector("[data-id='4']"),
        div5: document.querySelector("[data-id='5']"),
        div6: document.querySelector("[data-id='6']"),
        div7: document.querySelector("[data-id='7']"),
        div8: document.querySelector("[data-id='8']"),
    }

    //this is ugly -- i admit it; but it felt like the easiest way at the time. will look into how to refactor/simplify this eventually. just wanted something working.
    //this is the click event listener that alters the game board as welll as the board value
    gameSpace = document.querySelector('.gamespace')
    gameSpace.addEventListener('click', function(e){
        if (e.target.classList.contains('x')) {
            data = e.target.parentElement.dataset.id
            if (data == 0) {
                div = divMappings.div0
                div.textContent = 'X'
                board.box0='x'
                checkForXWin(board)
                checkForOWin(board)
                console.log(board) 
            }
            if (data == 1) {
                div = divMappings.div1
                div.textContent = 'X'
                board.box1 = 'x'
                checkForXWin(board)
                checkForOWin(board)
                console.log(board) 

            }
            if (data == 2) {
                div = divMappings.div2
                div.textContent = 'X'
                board.box2 = 'x'
                checkForXWin(board)
                checkForOWin(board)
                console.log(board) 

            }
            if (data == 3) {
                div = divMappings.div3
                div.textContent = 'X'
                board.box3 = 'x'
                checkForXWin(board)
                checkForOWin(board)
                console.log(board) 

            }
            if (data==4) {
                div=divMappings.div4
                div.textContent = 'X'
                board.box4 = 'x'
                checkForXWin(board)
                checkForOWin(board)
                console.log(board) 

            }
            if (data == 5) {
                div = divMappings.div5
                div.textContent = 'X'
                board.box5 = 'x'
                checkForXWin(board)
                checkForOWin(board)
            }
            if (data == 6) {
                div = divMappings.div6
                div.textContent = 'X'
                board.box6 ='x'
                checkForXWin(board)
                checkForOWin(board)
            }
            if (data == 7) {
                div = divMappings.div7
                div.textContent = 'X'
                board.box7 = 'x'
                checkForXWin(board)
                checkForOWin(board)
            }
            if (data == 8) {
                div = divMappings.div8
                div.textContent = 'X'
                board.box8 = 'x'
                checkForXWin(board)
                checkForOWin(board)
            }
        }
        if (e.target.classList.contains('o')) {
            data = e.target.parentElement.dataset.id
            if (data == 0) {
                div = divMappings.div0
                div.textContent = 'O'
                board.box0 ='o'
            }
            if (data == 1) {
                div = divMappings.div1
                div.textContent = 'O'
                board.box1 = 'o'
            }
            if (data == 2) {
                div = divMappings.div2
                div.textContent = 'O'
                board.box2= 'o'
            }
            if (data == 3) {
                div = divMappings.div3
                div.textContent = 'O'
                board.box3 = 'o'
            }
            if (data==4) {
                div=divMappings.div4
                div.textContent = 'O'
                board.box4 = 'o'
            }
            if (data == 5) {
                div = divMappings.div5
                div.textContent = 'O'
                board.box5 = 'o'
            }
            if (data == 6) {
                div = divMappings.div6
                div.textContent = 'O'
                board.box6 = 'o'
            }
            if (data == 7) {
                div = divMappings.div7
                div.textContent = 'O'
                board.box7 ='o'
            }
            if (data == 8) {
                div = divMappings.div8
                div.textContent = 'O'
                board.box8 = 'o'
            }
        }
    })
}())

//player factory function


