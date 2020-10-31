import React, { useState } from "react";
import Board, { moveCard } from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";

export default function newDrag(props) {
  const board = {
    // columns: props.column,
    columns: props.column
   // [
    //   {
    //     id: 1,
    //     title: "props.column.status",
    //     cards: [
    //       {
    //         id:" props.column.task_id",
    //         title: "props.column.task_title",
    //         description: "I am fine, let's drag it",
    //       },
    //     ],
    //   },
    //   {
    //     id: 2,
    //     title: "cheery drop",
    //     cards: [
    //       {
    //         id: 2,
    //         title: "Cheery 2 drop start",
    //         description: "I am good, let's drop here",
    //       },
    //       {
    //         id: 3,
    //         title: "Cheery 3 drop end",
    //         description: "I am okay, dropped it",
    //       },
    //     ],
    //   },
    //],
  };
    const ControlledBoard = () => {
        console.log(board.columns);
    // You need to control the state yourself.
    const [controlledBoard, setBoard] = useState(board);

    function handleCardMove(_card, source, destination) {
      const updatedBoard = moveCard(controlledBoard, source, destination);
      setBoard(updatedBoard);
    }
   
    return (
      <Board onCardDragEnd={handleCardMove} disableColumnDrag={false}>
        {controlledBoard}
      </Board>
    );
  };
  return (
    <div>
      <ControlledBoard />
    </div>
  );
}