import { makeStyles } from '@material-ui/core/styles';
import {Typography, Grid, Button, TextField, TextareaAutosize, DialogActions, Dialog, DialogTitle, DialogContent, IconButton} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles({
    editHeader: {
      backgroundColor: '#2A3E4C',
      color: '#FFFFFF',
      borderTopLeftRadius: '6px',
      borderTopRightRadius: '6px',
      borderBottom: '2px solid #283A46',
      alignSelf: 'flex-start',
      width: '-webkit-fill-available'
      
      },
    editContent:{
      backgroundColor: '#2A3E4C',
      color: '#FFFFFF',
      borderBottom: '2px solid #283A46'
    },
    typo: {
      color: '#97A1A9',
      width: 'fit-content',
      whiteSpace: 'nowrap',
    },

    container: {
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
    },
    textField: {
      marginLeft: '0px',
      border: '1px solid',
      borderRadius: '10px',
      maxWidth: '340px',
      width: '50%',
      backgroundColor: '#283A46',
      borderColor: '#356680',
      paddingLeft: '10px',
      padding: '6px 0 7px',
      resize: 'none',
      color: 'white',
      outline: 'none',
      font: 'inherit'
  },
    blueButton:{
      backgroundColor: "#14AFF1",
      color: "white", '&:hover': {
        backgroundColor: '#14AFF1',
        color: '#FFF'},
      maxHeight: "39px",
      borderRadius: "10px",
      textTransform: "none",
    },
    blueOutlineButton: {
      marginLeft: "0px",
      border: "1px solid #14AFF1",
      textTransform: "none",
      color: "white",
      maxHeight: "45px",
      borderRadius:"10px",
	  '&:hover': {
        backgroundColor: '#5daae0',
        color: 'white',
      },
    },
  });

export default function AddDialog(props) {
    const classes = useStyles();
    const {open,handleClose } = props;
    return (

      <div style={{}}
      >
      <Dialog open={open} 
              onClose={handleClose} 
              aria-labelledby="form-dialog-title"
              style={{}}
      >
        <DialogTitle
                id="form-dialog-title"
                className={classes.editHeader}
        >
          <Grid container >
            <Grid container style={{ width: '50%', alignItems: 'center'}}>
            <Typography className={classes.typoHeader}>Edit Invoice</Typography>
            </Grid>
            <Grid container style={{width: '50%', alignItems: 'center', justifyContent: 'flex-end'}}>
          <IconButton onClick={handleClose}>
            <CloseIcon style={{color: '#97A1A9', justifyContent: 'inherit'}}/>
          </IconButton>
          </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent className={classes.editContent} style={{}}>
          <Grid container
                className={classes.container}
          >
          
            <Typography className={classes.typo} style={{ alignSelf: 'center',}}>Invoice Amount</Typography>
            <TextField 
              
              className={classes.textField}
              autoFocus
              margin="dense"
              id="edit_amount"
              type="number"
              InputProps={{disableUnderline: true}}
           />
          </Grid>
          <Grid container
                style={{marginTop: '20px'}}
                className={classes.container}
          >
            <Typography className={classes.typo} style={{ marginTop: '10px'}}>Notes</Typography>
            <TextareaAutosize 
              
              className={classes.textField}
              rowsMax={4}
              rowsMin={4}
              resize="none"
              margin="dense"
              id="edit_notes"
              //style={{height: '20vh'}}
              InputProps={{}}
           />
          </Grid>
        </DialogContent>

        <DialogActions style={{backgroundColor: '#2A3E4C'}}>
          <Grid container>
            <Button onClick={handleClose}
                    variant="text"
                    style={{color:"#14AFF1", padding:'0px'}}
            >Cancel</Button>
          </Grid>
          <Grid container style={{justifyContent:'space-around'}}>
            <Button onClick={handleClose} 
                  variant="outlined"
                  className={classes.blueOutlineButton}
                        style={{}}
          >
            Reset
          </Button>
            <Button onClick={handleClose} 
                  variant="contained" 
                  className={classes.blueButton}
                        style={{}}
          >
            Save
          </Button>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>

    );
    }
    

