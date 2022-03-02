import { grey } from '@mui/material/colors';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
  },
  col: {
    margin: 5,
    // padding: 10,
    border: '1px solid black',
  },
  dropzone: {
    background: grey[900],
    height: 190,
    width: 190,
    display: 'grid',
    gap: 5,
    gridAutoRows: 'minmax(100px, auto)',
  },
  things: {
    display: 'flex',
    flexWrap: 'wrap',
    '& div *': {
      height: 100,
      width: 100,
      margin: 5,
    }
  },
  thing: {
    width: '100%',
    height: '100%',
    minHeight: 30,
    minWidth: 30,
    // borderRadius: '50%',
    // background: 'blue',
    fontWeight: 700,
    // color: 'white',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

export default useStyles;