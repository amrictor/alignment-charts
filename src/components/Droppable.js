import React from "react";
import { makeStyles } from "tss-react/mui";
import { useDrop } from 'react-dnd'

const useStyles = makeStyles()((theme, { isOver }) => ({
  root: {
    background: isOver ? 'red' : 'white',
  }
}))

const Droppable = (props) => {
  const { children, accept, onDrop } = props;
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "Draggable" || accept,
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    }),
    drop: onDrop
  }));
  const { classes } = useStyles({ isOver, canDrop });

  return (
    <div 
      className={classes.root}
      ref={drop}
      role={'Dustbin'} 
    >
      {children}
    </div>
  );
}

export default Droppable;