import React from "react";
import { makeStyles } from "tss-react/mui";
import { useDrag } from 'react-dnd'

const useStyles = makeStyles()((theme, { isDragging }) => ({
  root: {
    cursor: isDragging ? 'grabbing !important' : 'grab',
  }
}))

const Draggable = (props) => {
  const { children, type, id } = props;
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "Draggable" || type,
    item: { id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const { classes } = useStyles({ isDragging });
  return (
    <div 
      className={classes.root}
      ref={drag} 
    >
      {children}
    </div>
  );
}

export default Draggable;