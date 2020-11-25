## Resources 
https://qwerty.dev/chess-symbols-to-copy-and-paste/
https://react-dnd.github.io/react-dnd/docs/tutorial#setup


1. start by creating smallest component : Knight then square make the sqaure black and white and embed knight in the square
2. create a board to render 64 squares with alternate black and white squares
3. pass knight position to the board and hard code it at a particular x and y axis
4. write a function Observer from a Game component like which returns different knight position at random, which renderd knight in different squares
5. Now instead of generating at random handleClick to know which div is clicked and grab the corresponding x and y position as the knight position
6. we cannot move knight to random square clicked, must implement chess rule so only L move allowed, implement canMoveKnight(toX, toY) function
    6.a logic for canMove if the differnce between current position and new position must have wither x by 2 steps and Y by 1 or y by 2 steps and x by 1 