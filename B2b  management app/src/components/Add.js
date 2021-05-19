import { makeStyles } from '@material-ui/core/styles';
import {Typography, Grid, Button, TextField, TextareaAutosize, DialogActions, Dialog, DialogTitle, DialogContent, IconButton} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import {useState} from 'react'

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
      borderBottomLeftRadius: '6px',
      borderBottomRightRadius: '6px', 
      borderBottom: '2px solid #283A46'
    },
    typo: {
      color: '#97A1A9',
      width: 'fit-content',
      whiteSpace: 'nowrap',
      display: 'flex',
      alignSelf: 'center'
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
      color: '#FFFFFFA6',
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
  const { open, handleClose } = props;

  
  const [name, setName] = useState();
  const [name1, setName1] = useState();
  const [name2, setName2] = useState();
  const [name3, setName3] = useState();
  const [name4, setName4] = useState();
  const [name5, setName5] = useState();

  const handleNameChange = (e) => {
    setName(e.target.value);
   };
   const handleNameChange1 =(e) => {
     setName1(e.target.value);
   };
   const handleNameChange2 =(e) => {
      setName2(e.target.value);
    };
    const handleNameChange3 =(e) => {
      setName3(e.target.value);
    };
    const handleNameChange4 =(e) => {
      setName4(e.target.value);
    };
    const handleNameChange5 =(e) => {
      setName5(e.target.value);
    };
   const resetValues = () => {
     setName('')
     setName1('')
     setName2('')
     setName3('')
     setName4('')
     setName5('')
   } 
  return (
    <Dialog open={open} 
            onClose={handleClose} 
            aria-labelledby="form-dialog-title"
            
    >
        <Grid content style={{width: '-webkit-fill-available'}}>
      <DialogTitle
              id="form-dialog-title"
              className={classes.editHeader}
      >
        <Grid container style={{width:'inherit'}}>
          <Grid container style={{ width: '60%', alignItems: 'center'}}>
          <Typography className={classes.typoHeader}>Add Invoice</Typography>
          </Grid>
          <Grid container style={{width: '40%', alignItems: 'center', justifyContent: 'flex-end'}}>
        <IconButton onClick={handleClose}>
          <CloseIcon style={{color: '#97A1A9', justifyContent: 'inherit'}}/>
        </IconButton>
        </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent className={classes.editContent} style={{display:'inline-flex'}}>
      <Grid container style={{}}>
        <Grid container
              className={classes.container}
        >
          <Typography className={classes.typo}>Customer Name
              <Typography style={{color: '#FF5B5B',marginLeft:'2px'}}>*</Typography>
          </Typography>
          <TextField 
            className={classes.textField}
            autoFocus
            onChange={handleNameChange}
            value={name}
            margin="dense"
            id="edit_amount"
            type="text"
            InputProps={{disableUnderline: true}}
         />
        </Grid>

        <Grid container
              className={classes.container}
        >
          <Typography className={classes.typo} >Customer No.
              <Typography style={{color: '#FF5B5B',marginLeft:'2px'}}>*</Typography>
          </Typography>
          <TextField 
            
            className={classes.textField}
            autoFocus
            onChange={handleNameChange1}
            value={name1}
            margin="dense"
            id="edit_amount"
            InputProps={{disableUnderline: true}}
         />
        </Grid>
        <Grid container
              className={classes.container}
        >
          <Typography className={classes.typo} style={{}}>Invoice No.
              <Typography style={{color: '#FF5B5B',marginLeft:'2px'}}>*</Typography>
          </Typography>
          <TextField 
            
            className={classes.textField}
            autoFocus
            onChange={handleNameChange2}
            value={name2}
            margin="dense"
            id="edit_amount"
            InputProps={{disableUnderline: true}}
         />
        </Grid>

        <Grid container
              className={classes.container}
        >
          <Typography className={classes.typo}>Invoice Amount
              <Typography style={{color: '#FF5B5B',marginLeft:'2px'}}>*</Typography>
          </Typography>
          <TextField 
            
            className={classes.textField}
            autoFocus
            onChange={handleNameChange3}
            value={name3}
            margin="dense"
            id="edit_amount"
            type="number"
            InputProps={{disableUnderline: true,}}
         />
        </Grid>
        </Grid>

      <Grid container style={{}}>
       <Grid container
              className={classes.container}
        >
          <Typography className={classes.typo} style={{marginLeft:'30px'}}>Due Date
              <Typography style={{color: '#FF5B5B',marginLeft:'2px'}}>*</Typography>
          </Typography>
          <TextField 
            
            className={classes.textField}
            style={{}}
            autoFocus
            onChange={handleNameChange4}
            value={name4}
            margin="dense"
            type="date"
            id="edit_amount"
            InputProps={{disableUnderline: true}}
         />
        </Grid>

        <Grid container
              style={{marginTop: '20px'}}
              className={classes.container}
        >
          <Typography className={classes.typo} style={{alignSelf:'flex-start', marginTop: '5px', marginLeft:'30px'}}>
            Notes
            </Typography>
          <TextareaAutosize 
            
            className={classes.textField}
            rowsMax={4}
            rowsMin={4}
            onChange={handleNameChange5}
            value={name5}
            resize="none"
            margin="dense"
            id="edit_notes"
            //style={{height: '20vh'}}
            InputProps={{}}
         />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Grid container>
          <Button onClick={handleClose}
                  variant="text"
                  style={{color:"#14AFF1", padding:'0px'}}
          >Cancel</Button>
        </Grid>
        <Grid container style={{justifyContent:'space-around'}}>
          <Button onClick={resetValues} 
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
          Add
        </Button>
        </Grid>
      </DialogActions>
      </Grid>
    </Dialog>
    );
    }
    

