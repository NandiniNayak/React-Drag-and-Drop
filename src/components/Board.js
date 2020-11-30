import React from 'react'
import Square from './Square'
import Knight from './Knight'
import { moveKnight, canMoveKnight } from './Game'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import BoardSquare from './BoardSqaure'

function renderSquare(i, knightPosition) {
  const x = i % 8
//   console.log("x", x)
  const y = Math.floor(i / 8)
//   console.log("y", y)
//   const isKnightHere = x === knightX && y === knightY
  const black = (x + y) % 2 === 1
//   console.log("black",black)
//   const piece = isKnightHere ? <Knight /> : null

  function handleSquareClick(toX, toY) {
     if (canMoveKnight(toX, toY)) {
        moveKnight(toX, toY)
    }
  }

  function renderPiece(x, y, [knightX, knightY]) {
    if (x === knightX && y === knightY) {
        return <Knight />
    }
   }

  return(
      <div key={i} style={{ width: '12.5%', height: '12.5%' }} onClick={() => handleSquareClick(x, y)}>
        <BoardSquare x={x} y={y}>
            {/* pass sqaure position, if the knight is at the position render knight else render nothing in that sqaure  */}
            {renderPiece(x, y, knightPosition)}
        </BoardSquare>
      </div>
  )
}


export default function Board({ knightPosition }) {
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition))
  }
//   console.log("SQUARES",squares)

  return (
    <DndProvider backend={HTML5Backend}>
          <div
        style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexWrap: 'wrap'
        }}
        >
            {squares}
        </div>
    </DndProvider>
    
  )
}