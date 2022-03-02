import React, { useEffect } from 'react';
import useStyles from './styles';
import Draggable from 'components/Draggable';
import Droppable from 'components/Droppable';

import aragorn from 'assets/aragorn.jpg';
import boromir from 'assets/boromir.png';
import legolas from 'assets/legolas.jpg';
import gandalf from 'assets/gandalf.jpg';
import gimli from 'assets/gimli.jpg';
import frodo from 'assets/frodo.jpg';
import sam from 'assets/sam.png';
import merry from 'assets/merry.jpg';
import pippin from 'assets/pippin.jpg';

const rows = ['Good', 'Neutral', 'Evil'];
const columns = ['Lawful', 'Neutral', 'Chaotic'];
const pics = [aragorn, boromir, legolas, gandalf, gimli, frodo, sam, merry, pippin]

function App() {

  const { classes } = useStyles();
  
  const [things, setThings] = React.useState(pics);
  const [state, setState] = React.useState({});
  const onDrop = (key, item) => {
    setState(_state => ({
      ..._state,
      [item.id]: key
    }));
    setThings(_things => (_things.filter(t => t !== item.id)));
  }

  return (
    <div className={classes.root}>
      {rows.map(row => <div key={row} className={classes.row}>
        {columns.map(col => {
          const arr = pics.filter(p => state[p] === `${row}${col}`);
          return (
            <Droppable key={`${row}${col}`} onDrop={(item, monitor) => onDrop(`${row}${col}`, item)}>
              <div>{col} {row}</div>
              <div className={classes.col}>  
                <div 
                  className={classes.dropzone}
                  style={{
                    gridTemplateColumns: `repeat(${Math.ceil(Math.sqrt(arr.length))}, 1fr)`,
                    gridTemplateRows: `repeat(${Math.ceil(Math.sqrt(arr.length))}, 1fr)`,
                  }}
                >
                  {arr.map(pic => 
                    <Draggable id={pic} key={pic}>
                      <div className={classes.thing} style={{ backgroundImage: `url(${pic})`}}/>
                    </Draggable>
                  )}
                </div>
              </div>
            </Droppable>
          )}
        )}  
      </div>)}
      <div className={classes.things}>
        {things.map(thing =>
          <Draggable id={thing} key={thing}>
            <div className={classes.thing} style={{ backgroundImage: `url(${thing})`}}/>
          </Draggable>
        )}
      </div>
    </div>    
  );
}


export default App;