## Resources 
https://qwerty.dev/chess-symbols-to-copy-and-paste/  : unicode
https://react-dnd.github.io/react-dnd/docs/tutorial#setup

static images in base 64 for background : https://www.base64-image.de/


1. start by creating smallest component : Knight then square make the sqaure black and white and embed knight in the square
2. create a board to render 64 squares with alternate black and white squares
3. pass knight position to the board and hard code it at a particular x and y axis
4. write a function Observer from a Game component like which returns different knight position at random, which renderd knight in different squares
5. Now instead of generating at random handleClick to know which div is clicked and grab the corresponding x and y position as the knight position
6. we cannot move knight to random square clicked, must implement chess rule so only L move allowed, implement canMoveKnight(toX, toY) function
    1. logic for canMove if the differnce between current position and new position must have wither x by 2 steps and Y by 1 or y by 2 steps and x by 1 
7. set up drag and drop fetaure by installing : react-dnd and react-dnd-html5-backend
8. add DND provider to the board
9. define drag types
10. useDrag hook in the knight component
    1. useDrag: accepts a specification object. The item.typeproperty is required, and specifies the type of item being dragged.

    2. collect : defines a collector function: this is basically a way to transform state from the drag-and-drop system into usable props for your components

    3. isDragging : flag indicates wether the item is currently dragged or not
    item refers to the object selected
    item type set to Knight in this case
    monitor: has drag sources, drop targets and types as the object keys
11. Make the board squares droppable
    1. The knight is a drag source, but we need drop targets, make the square the drop target, but we need to know the position of the square.
    2. separate out the dynamic and static component
        1. BoardSqaure:  has the position of square
        2. which in turn renders old square
    3. render BoardSqaure from Board

12. useDrop hook : wrap BoardSqaure with useDrop hook

13. Knight is draggable source and BoardSqaure is drop target, hence useDrag in Knight component and useDrop in board component

    1. useDrag: drag, monitor, collect, isDragging, ItemTypes.knight
    2. useDrop: drop, monitor, collect, isOver, ItemTypes.knight

14. Only allow drop where possible, its easy with react DND, define canDrop function
    1. useDrop: drop, monitor, collect, isOver, ItemTypes.knight, canDrop
        canDrop is a DND hook uses the function logic canMoveKnight created
        useDrop : drop, isOver, canDrop

15. Add a drag preview image:
    this is easy with useDrag hook, use the preview ref provided by useDrag






