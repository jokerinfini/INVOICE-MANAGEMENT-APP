import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Grid, Button, DialogActions, Dialog, DialogTitle, DialogContent, IconButton} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
const useStyles = makeStyles({
    editHeader: {
        backgroundColor: '#2A3F4D',
        color: '#FFFFFF',
        borderTopLeftRadius: '6px',
        borderTopRightRadius: '6px',
        borderBottom: '2px solid #283A46',
        alignSelf: 'flex-start',
        width: '400px', 
        },
    editContent:{
        backgroundColor: '#2A3E4C',
        color: '#FFFFFF',
        borderBottom: '2px solid #283A46',
        width: '400px'
    },
    typo: {
        color: '#97A1A9',
        width: 'fit-content',
        whiteSpace: 'wrap',
    },

    container: {
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
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
    },
    });
export default function DeleteDialogBox(props) {
    const classes = useStyles();
    const {open,handleClose} = props;
    return (
        <Dialog open={open} 
                onClose={handleClose} 
                aria-labelledby="form-dialog-title"
        >
        <DialogTitle
                id="form-dialog-title"
                className={classes.editHeader}
        >
        <Grid container style={{}}>
            <Grid container style={{ width: '50%', alignItems: 'center'}}>
                <Typography className={classes.typoHeader}>Delete record(s)?</Typography>
            </Grid>
            <Grid container style={{width: '50%', alignItems: 'center', justifyContent: 'flex-end'}}>
                <IconButton onClick={handleClose}>
                    <CloseIcon style={{color: '#97A1A9', justifyContent: 'inherit'}}/>
                </IconButton>
            </Grid>
        </Grid>
        </DialogTitle>
        <DialogContent className={classes.editContent} style={{}}>
            <Typography className={classes.typo} style={{ alignSelf: 'center', display: 'inline-flex'}}>
            You'll lose your record(s) after this action. We can't recover them once you delete. <br /><br /> 
            Are you sure you want to &nbsp;
            <Typography style={{color: '#FF5E5E', display: 'contents'}}>
            permanently delete</Typography> them?
            </Typography>
        </DialogContent>    
        <DialogActions style={{backgroundColor: '#2A3E4C', borderBottomLeftRadius: '6px',
                                borderBottomRightRadius: '6px', }}>
            <Grid container style={{justifyContent:'flex-end'}}>
            <Button onClick={handleClose} 
                    variant="outlined"
                    className={classes.blueOutlineButton}
                        style={{}}
            >
            Cancel
            </Button>
            <Button onClick={handleClose} 
                    variant="contained" 
                    className={classes.blueButton}
                        style={{marginLeft: '20px'}}
            >
            Delete
            </Button>
            </Grid>
        </DialogActions>
        </Dialog>

    )
    };