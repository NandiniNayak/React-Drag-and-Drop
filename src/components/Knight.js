import React from 'react'
import { ItemTypes } from './Constants'
import { useDrag, DragPreviewImage } from 'react-dnd'
import {catImage, knightImage, horseImage} from "./ImageEncode"



function Knight() {
  const [{isDragging}, drag, preview] = useDrag({
    item: { type: ItemTypes.KNIGHT },
    collect: monitor => {
      console.log("Monitor",monitor)
      return {isDragging: !!monitor.isDragging()}
    }
  })
  console.log("drag",drag)

  const knightStyle={
        opacity: isDragging ? 0.5 : 1,
        fontSize: 'xxx-large',
        fontWeight: 'bold',
        cursor: 'move',
  }

  return (
    <>
        <DragPreviewImage connect={preview} src={knightImage} />
        <div
          ref={drag}
          style={{
            ...knightStyle,
            opacity: isDragging ? 0.5 : 1,
          }}
        >
          ♘
        </div>
    </>
  )
}

export default Knight